import { useEffect, useRef, useState, useCallback } from "react";
import { flushSync } from "react-dom";

import { GlowerTowerGame, pickResolutionProfile, type ResolutionProfile } from "./engine/GlowerTowerGame";
import { EngineConfig, GameStatus } from "./engine/gameTypes";
import { LEVELS, TOTAL_LEVELS, menuLevelIndex } from "./levels";
import type { TowerLevelDefinition } from "./levels/levelTypes";
import { loadProgress, markLevelCompleted, isUnlocked, type SavedProgress } from "./levels/progress";
import { soundEngine } from "./soundEngine";
import { translations, loadLang, saveLang, type Lang } from "./i18n";

import { TouchControls } from "./components/TouchControls";
import { SettingsModal } from "./components/SettingsModal";
import { VictoryModal, GameOverModal } from "./components/VictoryModal";
import { GameCompleteScreen } from "./components/GameCompleteScreen";
import { LoadingOverlay } from "./components/LoadingOverlay";
import { HelpModal } from "./components/HelpModal";
import { IosFullscreenGuide } from "./components/IosFullscreenGuide";
import { MenuScreen } from "./components/MenuScreen";
import { LevelSelectScreen } from "./components/LevelSelectScreen";
import { GameHUD } from "./components/GameHUD";

import { toggleFullscreen } from "./utils/fullscreen";
import { useLoadingOverlay } from "./hooks/useLoadingOverlay";
import { useRunTimer } from "./hooks/useRunTimer";

type AppScreen = "menu" | "levelSelect" | "playing" | "win" | "gameover" | "gamecomplete";

const IN_GAME_SCREENS: AppScreen[] = ["playing", "win", "gameover", "gamecomplete"];

export default function App() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const gameRef = useRef<GlowerTowerGame | null>(null);

  const [screen, setScreen] = useState<AppScreen>("menu");
  const screenRef = useRef<AppScreen>("menu");
  useEffect(() => { screenRef.current = screen; }, [screen]);

  // ── Language ──────────────────────────────────────────────────────────────
  const [lang, setLangState] = useState<Lang>(() => loadLang());
  const t = translations[lang];
  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    saveLang(next);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.pageTitle;
  }, [lang, t]);

  // ── Engine config / player state ──────────────────────────────────────────
  const [config, setConfig] = useState<EngineConfig>({
    cullingEnabled: true,
    simulatedFpsThrottle: 0,
    filterMode: "crisp",
    renderScale: 1,
    soundMuted: false,
  });

  const [playerState, setPlayerState] = useState({
    level: 0,
    score: 0,
    gemsCollected: 0,
    totalGems: LEVELS[0].gems.length,
    jumps: 0,
    elapsedTime: 0,
    status: "running" as GameStatus,
  });

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [showIosFullscreenHelp, setShowIosFullscreenHelp] = useState(false);
  const [towerHeight, setTowerHeight] = useState(LEVELS[0].towerHeight);
  const [currentLevel, setCurrentLevel] = useState(1);
  const levelRef = useRef(1);
  useEffect(() => { levelRef.current = currentLevel; }, [currentLevel]);

  const [progress, setProgress] = useState<SavedProgress>(() => loadProgress());

  const loading = useLoadingOverlay();
  const runTimer = useRunTimer();
  const totalRunTimeRef = useRef(0);

  const [resolution, setResolution] = useState<ResolutionProfile>(() =>
    pickResolutionProfile(
      typeof window === "undefined" ? 1280 : window.innerWidth,
      typeof window === "undefined" ? 800 : window.innerHeight
    )
  );

  // ── Engine construction ──────────────────────────────────────────────────
  const createEngine = useCallback(
    (levelDef: TowerLevelDefinition) => {
      const host = mountRef.current;
      if (!host) return null;
      if (gameRef.current) { gameRef.current.dispose(); gameRef.current = null; }
      const game = new GlowerTowerGame(host, levelDef);
      gameRef.current = game;
      setTowerHeight(game.towerHeight);
      setPlayerState((prev) => ({ ...prev, totalGems: game.level.gems.length }));
      game.config = { ...config };
      game.applyCanvasFilter();
      soundEngine.setMuted(config.soundMuted);
      game.setRenderResolution(resolution.width, resolution.height);

      game.onPlayerStateUpdate = (pState) => {
        setPlayerState({
          level: Math.max(0, Math.min(game.towerHeight, Math.floor(pState.y))),
          score: pState.score,
          gemsCollected: pState.gemsCollected,
          totalGems: pState.totalGems,
          jumps: pState.jumpCount,
          elapsedTime: pState.elapsedTime,
          status: pState.status,
        });
      };

      game.onGameStatusChange = (newStatus) => {
        setPlayerState((prev) => ({ ...prev, status: newStatus }));
        if (newStatus !== "gameover" && newStatus !== "win") return;

        const finalTime = runTimer.stop();
        if (newStatus === "win") {
          totalRunTimeRef.current += finalTime;
          const ps = game.playerState;
          const allGems = ps.gemsCollected >= ps.totalGems;
          const updated = markLevelCompleted(
            levelRef.current,
            allGems,
            ps.jumpCount,
            finalTime,
            TOTAL_LEVELS
          );
          setProgress(updated);
          setScreen(levelRef.current >= TOTAL_LEVELS ? "gamecomplete" : "win");
        } else {
          setScreen("gameover");
        }
      };
      return game;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  // Initial engine mount (menu backdrop).
  useEffect(() => {
    const initialIdx = menuLevelIndex(loadProgress());
    const game = createEngine(LEVELS[initialIdx]);
    if (game) game.setSceneMode("menu");
    return () => { gameRef.current?.dispose(); gameRef.current = null; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Swap scene mode when the screen changes.
  useEffect(() => {
    if (!gameRef.current) return;
    if (screen === "menu" || screen === "levelSelect") {
      const idx = menuLevelIndex(loadProgress());
      const correctBackdrop = gameRef.current.level.id === LEVELS[idx].id;
      if (!correctBackdrop) {
        const newGame = createEngine(LEVELS[idx]);
        if (newGame) newGame.setSceneMode("menu");
      } else {
        gameRef.current.setSceneMode("menu");
      }
    } else if (screen === "playing") {
      gameRef.current.setSceneMode("play");
    }
  }, [screen, progress, createEngine]);

  // Run timer — starts on first input, tick every frame while playing.
  useEffect(() => {
    let raf = 0;
    const loop = () => {
      raf = requestAnimationFrame(loop);
      if (screenRef.current !== "playing" || !gameRef.current) return;
      const game = gameRef.current;
      if (game.playerState.status !== "running") return;
      const anyInput = game.input.left || game.input.right || game.input.up || game.input.jumpQueued;
      if (!runTimer.isRunning() && !runTimer.hasFinalTime() && anyInput) {
        runTimer.start();
      }
      runTimer.tick();
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Resolution profile keeps in sync with viewport.
  useEffect(() => {
    const applyProfile = () => {
      const next = pickResolutionProfile(window.innerWidth, window.innerHeight);
      setResolution((prev) => (prev.id === next.id ? prev : next));
    };
    applyProfile();
    window.addEventListener("resize", applyProfile);
    window.addEventListener("orientationchange", applyProfile);
    return () => {
      window.removeEventListener("resize", applyProfile);
      window.removeEventListener("orientationchange", applyProfile);
    };
  }, []);

  useEffect(() => {
    gameRef.current?.setRenderResolution(resolution.width, resolution.height);
  }, [resolution]);

  // ── Handlers ─────────────────────────────────────────────────────────────
  const handleConfigChange = useCallback(
    (newConfig: Partial<EngineConfig>) => {
      setConfig((prev) => {
        const updated = { ...prev, ...newConfig };
        if (gameRef.current) {
          gameRef.current.config = updated;
          if (newConfig.filterMode !== undefined) gameRef.current.applyCanvasFilter();
          if (newConfig.soundMuted !== undefined) soundEngine.setMuted(newConfig.soundMuted);
          if (newConfig.renderScale !== undefined) {
            gameRef.current.setRenderResolution(resolution.width, resolution.height);
          }
        }
        return updated;
      });
    },
    [resolution]
  );

  const handleFullscreen = async () => {
    const result = await toggleFullscreen();
    if (result === "ios-blocked") setShowIosFullscreenHelp(true);
  };

  /**
   * Start a specific level: paint the loading overlay first (via flushSync),
   * then in two rAF frames create the heavy engine so the browser has time
   * to render the overlay before the main thread blocks.
   */
  const startLevel = (levelNum: number, options: { changeScreenImmediately?: boolean } = {}) => {
    const level = LEVELS[levelNum - 1];
    flushSync(() => {
      loading.trigger(level.gems.length);
      if (options.changeScreenImmediately) setScreen("playing");
    });
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const newGame = createEngine(level);
        if (newGame) {
          newGame.restartGame();
          newGame.setSceneMode("play");
        }
        runTimer.reset();
        if (!options.changeScreenImmediately) setScreen("playing");
      });
    });
  };

  const handleOpenLevelSelect = () => {
    setProgress(loadProgress());
    setScreen("levelSelect");
  };
  const handleStartFromMenu = handleOpenLevelSelect;

  const handleSelectLevel = (levelNum: number) => {
    if (!isUnlocked(levelNum, loadProgress())) return;
    setCurrentLevel(levelNum);
    startLevel(levelNum);
  };

  const handleNewGame = () => {
    setCurrentLevel(1);
    totalRunTimeRef.current = 0;
    startLevel(1);
  };

  const handleRestart = () => {
    gameRef.current?.restartGame();
    runTimer.reset();
    setScreen("playing");
  };

  const handleNextLevel = () => {
    const next = currentLevel + 1;
    if (next > TOTAL_LEVELS) {
      setScreen("gamecomplete");
      return;
    }
    setCurrentLevel(next);
    startLevel(next, { changeScreenImmediately: true });
  };

  const handleBackToMenu = () => {
    setCurrentLevel(1);
    totalRunTimeRef.current = 0;
    setScreen("menu");
  };

  // Touch controls proxy input into the engine while playing.
  const withGameInput = (fn: (game: GlowerTowerGame) => void) => {
    if (!gameRef.current || screenRef.current !== "playing") return;
    fn(gameRef.current);
  };
  const handleTouchMoveLeft = (p: boolean) => withGameInput((g) => { g.input.left = p; });
  const handleTouchMoveRight = (p: boolean) => withGameInput((g) => { g.input.right = p; });
  const handleTouchJump = (p: boolean) =>
    withGameInput((g) => {
      if (p && !g.input.up) g.input.jumpQueued = true;
      g.input.up = p;
    });
  const handleTouchDoor = () => withGameInput((g) => { g.input.doorQueued = true; });

  const toggleSound = () => handleConfigChange({ soundMuted: !config.soundMuted });
  const openSettings = () => setIsSettingsOpen(true);
  const openHelp = () => setIsHelpOpen(true);

  const inGameScreen = IN_GAME_SCREENS.includes(screen);

  return (
    <main className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-[#050b14] font-freckle text-slate-100 select-none">
      <div
        className={`relative overflow-hidden transition-all duration-700 ${
          config.filterMode === "crt" ? "crt-overlay" : ""
        } `}
        style={{
          width: "100vw",
          height: "100vh",
          filter: screen === "menu" || screen === "levelSelect" ? "blur(1.5px) brightness(0.72)" : "none",
        }}
      >
        <div
          ref={mountRef}
          className={`absolute inset-0 transition-all duration-700 ${
            config.filterMode === "crisp" ? "rendering-pixelated" : ""
          }`}
          style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        />
      </div>

      {screen === "menu" && (
        <MenuScreen
          t={t}
          lang={lang}
          onLangChange={setLang}
          soundMuted={config.soundMuted}
          onToggleSound={toggleSound}
          onOpenSettings={openSettings}
          onOpenHelp={openHelp}
          onFullscreen={handleFullscreen}
          onPlay={handleStartFromMenu}
        />
      )}

      {screen === "levelSelect" && (
        <LevelSelectScreen
          t={t}
          progress={progress}
          onBackToMenu={handleBackToMenu}
          onSelectLevel={handleSelectLevel}
        />
      )}

      {inGameScreen && (
        <GameHUD
          t={t}
          currentLevel={currentLevel}
          towerHeight={towerHeight}
          playerLevel={playerState.level}
          gemsCollected={playerState.gemsCollected}
          totalGems={playerState.totalGems}
          score={playerState.score}
          displayTime={runTimer.displayTime}
          soundMuted={config.soundMuted}
          onToggleSound={toggleSound}
          onRestart={handleRestart}
          onBackToMenu={handleBackToMenu}
          onOpenSettings={openSettings}
          onOpenHelp={openHelp}
          onFullscreen={handleFullscreen}
        />
      )}

      {screen === "playing" && (
        <TouchControls
          t={t}
          onMoveLeft={handleTouchMoveLeft}
          onMoveRight={handleTouchMoveRight}
          onJump={handleTouchJump}
          onDoor={handleTouchDoor}
        />
      )}

      {showIosFullscreenHelp && (
        <IosFullscreenGuide t={t} onClose={() => setShowIosFullscreenHelp(false)} />
      )}

      <SettingsModal
        t={t}
        config={config}
        onConfigChange={handleConfigChange}
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />

      {isHelpOpen && (
        <HelpModal
          t={t}
          towerHeight={towerHeight}
          totalLevels={TOTAL_LEVELS}
          onClose={() => setIsHelpOpen(false)}
        />
      )}

      {screen === "win" && (
        <VictoryModal
          t={t}
          score={playerState.score}
          gems={playerState.gemsCollected}
          totalGems={playerState.totalGems}
          jumps={playerState.jumps}
          timeSec={runTimer.finalTime()}
          towerHeight={towerHeight}
          levelNumber={currentLevel}
          totalLevels={TOTAL_LEVELS}
          onRestart={handleRestart}
          onBackToMenu={handleBackToMenu}
          onNextLevel={handleNextLevel}
        />
      )}
      {screen === "gamecomplete" && (
        <GameCompleteScreen
          t={t}
          score={playerState.score}
          gems={playerState.gemsCollected}
          totalGems={playerState.totalGems}
          jumps={playerState.jumps}
          totalTime={totalRunTimeRef.current}
          levelsCompleted={TOTAL_LEVELS}
          onRestart={handleNewGame}
          onBackToMenu={handleBackToMenu}
        />
      )}
      {screen === "gameover" && (
        <GameOverModal
          t={t}
          score={playerState.score}
          level={playerState.level}
          towerHeight={towerHeight}
          onRestart={handleRestart}
          onBackToMenu={handleBackToMenu}
        />
      )}

      {loading.loadingKey > 0 && (
        <LoadingOverlay
          t={t}
          visible={loading.loadingVisible}
          levelNumber={currentLevel}
          gemsCount={loading.loadingGemsCount}
        />
      )}
    </main>
  );
}
