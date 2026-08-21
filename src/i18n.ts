export type Lang = "pl" | "en";

export interface Translation {
  // Meta
  appName: string;
  appSubtitle: string;
  pageTitle: string;

  // Menu
  menuPlay: string;
  menuPlayAria: string;
  unmute: string;
  mute: string;
  settings: string;
  help: string;
  fullscreen: string;
  langPl: string;
  langEn: string;
  menuCredits: string;

  // Level select
  selectLevel: string;
  backToMenu: string;
  selectHint: string;
  completed: string;
  upTo: string;
  bestJumps: string;
  levelNew: string;
  levelPlay: string;

  // HUD
  hudTower: string;
  hudFloor: string;
  restartLevel: string;

  // Victory modal
  clearedTitle: (n: number) => string;
  clearedDesc: (floors: number) => string;
  doneTitle: (n: number) => string;
  doneBut: string;
  gemsHint: (gems: number, total: number) => string;
  scoreLabel: string;
  ptsSuffix: string;
  gemsLabel: string;
  jumpsLabel: string;
  timeLabel: string;
  secondsSuffix: string;
  nextLevel: (n: number) => string;
  restart: string;
  menu: string;
  playAgain: string;

  // Game over modal
  gameOver: string;
  gameOverDesc: string;
  floorLabel: string;
  pointsLabel: string;
  tryAgain: string;

  // Game complete screen
  completedBadge: string;
  congrats: string;
  congratsDesc: (levels: number) => string;
  restartGame: string;
  backToMenuCaps: string;

  // Loading overlay
  loadingTower: (n: number) => string;
  loadingGems: (n: number) => string;
  loadingText: string;

  // Help modal
  helpTitle: string;
  helpIntro: (floors: number, levels: number) => string;
  elementsTitle: string;
  elElevators: string;
  elSprings: string;
  elGems: string;
  elCheckpoints: string;
  elDoors: string;
  elTimer: string;
  elCollapsing: string;
  elLevers: string;
  elBalls: string;
  controlsTitle: string;
  ctrlMove: string;
  ctrlJump: string;
  ctrlInteract: string;
  ctrlRestart: string;
  understand: string;

  // Settings modal
  settingsTitle: string;
  render: string;
  renderFast: string;
  renderSharp: string;
  imageFilter: string;
  filterPixelated: string;
  filterSmooth: string;
  filterCrt: string;
  muted: string;
  soundOn: string;
  close: string;

  // Touch controls
  touchLeft: string;
  touchRight: string;
  touchDoor: string;
  touchJump: string;

  // iOS fullscreen guide
  iosTitle: string;
  iosDesc: string;
  iosStep1a: string;
  iosShare: string;
  iosStep1b: string;
  iosStep2a: string;
  iosAddToHome: string;
  iosStep3a: string;
  iosStep3b: string;
  iosFirefox: string;
}

export const translations: Record<Lang, Translation> = {
  pl: {
    appName: "Glut Żelek",
    appSubtitle: "Wieża",
    pageTitle: "Glut Żelek: Wieża",
    menuPlay: "GRAJ",
    menuPlayAria: "Graj",
    menuCredits: "(c) LUKAMI 2026",
    unmute: "Włącz dźwięk",
    mute: "Wycisz dźwięk",
    settings: "Ustawienia",
    help: "Instrukcja",
    fullscreen: "Pełny ekran",
    langPl: "Polski",
    langEn: "Angielski",

    selectLevel: "Wybierz Poziom",
    backToMenu: "Powrót do menu",
    selectHint: "Ukończone i następny są dostępne.",
    completed: "Ukończono:",
    upTo: "Do:",
    bestJumps: "sk",
    levelNew: "nowy",
    levelPlay: "graj",

    hudTower: "Wieża",
    hudFloor: "Piętro",
    restartLevel: "Zrestartuj poziom (R)",

    clearedTitle: (n) => `POZIOM ${n} ZALICZONY!`,
    clearedDesc: (floors) => `Pokonałeś ${floors} pięter i zebrałeś wszystkie klejnoty!`,
    doneTitle: (n) => `POZIOM ${n} UKOŃCZONY`,
    doneBut: "ale nie zaliczony!",
    gemsHint: (gems, total) =>
      `Zbierz wszystkie klejnoty (${gems}/${total}), żeby odblokować następny poziom.`,
    scoreLabel: "Wynik:",
    ptsSuffix: "pkt",
    gemsLabel: "Klejnoty:",
    jumpsLabel: "Skoki:",
    timeLabel: "Czas:",
    secondsSuffix: "s",
    nextLevel: (n) => `NASTĘPNY POZIOM (${n})`,
    restart: "RESTART",
    menu: "MENU",
    playAgain: "ZAGRAJ PONOWNIE",

    gameOver: "KONIEC GRY",
    gameOverDesc: "Upadłeś z wieży lub wpadłeś w pułapkę.",
    floorLabel: "Piętro:",
    pointsLabel: "Punkty:",
    tryAgain: "SPRÓBUJ PONOWNIE",

    completedBadge: "Gra ukończona",
    congrats: "GRATULACJE!",
    congratsDesc: (levels) =>
      `Ukończyłeś wszystkie ${levels} poziomy wieży pełnej przygód!`,
    restartGame: "RESTART GRY",
    backToMenuCaps: "POWRÓT DO MENU",

    loadingTower: (n) => `Wieża ${n}`,
    loadingGems: (n) => `Zbierz ${n} klejnotów`,
    loadingText: "Wczytuje...",

    helpTitle: "INSTRUKCJA",
    helpIntro: (floors, levels) =>
      `Wspinaj się po spiralnej wieży liczącej ${floors} pięter na każdy level. Łącznie ${levels} poziomów.`,
    elementsTitle: "ELEMENTY WIEŻY:",
    elElevators: "Windy: pionowe, niebieska krawędź",
    elSprings: "Sprężyny: wyrzut w górę",
    elGems: "Klejnoty: zbieraj wszystkie",
    elCheckpoints: "Checkpointy: zapis postępu",
    elDoors: "Drzwi: teleport, stań i ↓ / S",
    elTimer: "Zegar: start przy pierwszym ruchu",
    elCollapsing: "Zapadnie: czerwona krawędź, po wejściu chowają się",
    elLevers: "Dzwignie: przełącznik z kulką, ↓ / S wysuwa/chowa schodek",
    elBalls: "Piłki: czerwone kule, unikaj",
    controlsTitle: "STEROWANIE:",
    ctrlMove: "← / → lub A / D – ruch",
    ctrlJump: "↑ lub Spacja – skok",
    ctrlInteract: "↓ lub S – drzwi / dzwignia",
    ctrlRestart: "R – restart",
    understand: "ROZUMIEM",

    settingsTitle: "USTAWIENIA",
    render: "Render",
    renderFast: "640px (szybciej)",
    renderSharp: "1280px (ostrzej)",
    imageFilter: "Filtr obrazu",
    filterPixelated: "Pikselowy",
    filterSmooth: "Gładki",
    filterCrt: "CRT",
    muted: "Wyciszony",
    soundOn: "Dźwięk włączony",
    close: "ZAMKNIJ",

    touchLeft: "W lewo",
    touchRight: "W prawo",
    touchDoor: "Wejdź przez drzwi",
    touchJump: "Skok",

    iosTitle: "Pełny ekran na iPhone",
    iosDesc:
      "iOS blokuje Fullscreen API w kartach przeglądarki. Jedyne wyjście to instalacja gry jako aplikacji z ekranu startowego.",
    iosStep1a: "Naciśnij",
    iosShare: "Udostępnij",
    iosStep1b: "— ikonę kwadratu ze strzałką w górę, w dolnym pasku Safari.",
    iosStep2a: "Przewiń w dół i dotknij",
    iosAddToHome: "Dodaj do ekranu startowego",
    iosStep3a: "Otwórz",
    iosStep3b: "z ekranu startowego.",
    iosFirefox: "Firefox: naciśnij ⋯ → Dodaj do ekranu startowego.",
  },

  en: {
    appName: "Jelly Slime",
    appSubtitle: "The Tower",
    pageTitle: "Jelly Slime: The Tower",

    menuPlay: "PLAY",
    menuPlayAria: "Play",
    menuCredits: "(c) LUKAMI 2026",
    unmute: "Unmute",
    mute: "Mute",
    settings: "Settings",
    help: "Help",
    fullscreen: "Fullscreen",
    langPl: "Polish",
    langEn: "English",

    selectLevel: "Select Level",
    backToMenu: "Back to menu",
    selectHint: "Completed levels and the next one are available.",
    completed: "Completed:",
    upTo: "Up to:",
    bestJumps: "jumps",
    levelNew: "new",
    levelPlay: "play",

    hudTower: "Tower",
    hudFloor: "Floor",
    restartLevel: "Restart level (R)",

    clearedTitle: (n) => `LEVEL ${n} CLEARED!`,
    clearedDesc: (floors) =>
      `You conquered ${floors} floors and collected all the gems!`,
    doneTitle: (n) => `LEVEL ${n} COMPLETED`,
    doneBut: "but not cleared!",
    gemsHint: (gems, total) =>
      `Collect all the gems (${gems}/${total}) to unlock the next level.`,
    scoreLabel: "Score:",
    ptsSuffix: "pts",
    gemsLabel: "Gems:",
    jumpsLabel: "Jumps:",
    timeLabel: "Time:",
    secondsSuffix: "s",
    nextLevel: (n) => `NEXT LEVEL (${n})`,
    restart: "RESTART",
    menu: "MENU",
    playAgain: "PLAY AGAIN",

    gameOver: "GAME OVER",
    gameOverDesc: "You fell off the tower or hit a trap.",
    floorLabel: "Floor:",
    pointsLabel: "Points:",
    tryAgain: "TRY AGAIN",

    completedBadge: "Game completed",
    congrats: "CONGRATULATIONS!",
    congratsDesc: (levels) =>
      `You have completed all ${levels} levels of a tower full of adventures!`,
    restartGame: "RESTART GAME",
    backToMenuCaps: "BACK TO MENU",

    loadingTower: (n) => `Tower ${n}`,
    loadingGems: (n) => `Collect ${n} gems`,
    loadingText: "Loading...",

    helpTitle: "INSTRUCTIONS",
    helpIntro: (floors, levels) =>
      `Climb the spiral tower of ${floors} floors in every level. ${levels} levels in total.`,
    elementsTitle: "TOWER ELEMENTS:",
    elElevators: "Elevators: vertical, blue edge",
    elSprings: "Springs: launch you up",
    elGems: "Gems: collect them all",
    elCheckpoints: "Checkpoints: save progress",
    elDoors: "Doors: teleport, stand on them and press ↓ / S",
    elTimer: "Timer: starts with your first move",
    elCollapsing: "Collapsing stairs: red edge, retract after you step on them",
    elLevers: "Levers: switch with a ball, ↓ / S shows/hides a stair",
    elBalls: "Balls: red spheres, avoid them",
    controlsTitle: "CONTROLS:",
    ctrlMove: "← / → or A / D – move",
    ctrlJump: "↑ or Space – jump",
    ctrlInteract: "↓ or S – doors / lever",
    ctrlRestart: "R – restart",
    understand: "GOT IT",

    settingsTitle: "SETTINGS",
    render: "Render",
    renderFast: "640px (faster)",
    renderSharp: "1280px (sharper)",
    imageFilter: "Image filter",
    filterPixelated: "Pixelated",
    filterSmooth: "Smooth",
    filterCrt: "CRT",
    muted: "Muted",
    soundOn: "Sound on",
    close: "CLOSE",

    touchLeft: "Left",
    touchRight: "Right",
    touchDoor: "Enter door",
    touchJump: "Jump",

    iosTitle: "Fullscreen on iPhone",
    iosDesc:
      "iOS blocks the Fullscreen API in browser tabs. The only way around it is to install the game as an app from the home screen.",
    iosStep1a: "Tap",
    iosShare: "Share",
    iosStep1b: "— the square icon with the arrow pointing up, in the Safari bottom bar.",
    iosStep2a: "Scroll down and tap",
    iosAddToHome: "Add to Home Screen",
    iosStep3a: "Open",
    iosStep3b: "from your home screen.",
    iosFirefox: "Firefox: press ⋯ → Add to Home Screen.",
  },
};

const LANG_STORAGE_KEY = "jelly-lang";

export function loadLang(): Lang {
  try {
    const stored = localStorage.getItem(LANG_STORAGE_KEY);
    return stored === "en" ? "en" : "pl";
  } catch {
    return "pl";
  }
}

export function saveLang(lang: Lang): void {
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch {
    // ignore storage errors (private mode etc.)
  }
}
