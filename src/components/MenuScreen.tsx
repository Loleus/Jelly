import React from "react";
import { Play } from "lucide-react";
import type { Translation, Lang } from "../i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { TopIconBar } from "./TopIconBar";

interface MenuScreenProps {
  t: Translation;
  lang: Lang;
  onLangChange: (l: Lang) => void;
  soundMuted: boolean;
  onToggleSound: () => void;
  onOpenSettings: () => void;
  onOpenHelp: () => void;
  onFullscreen: () => void;
  onPlay: () => void;
}

export const MenuScreen: React.FC<MenuScreenProps> = ({
  t,
  lang,
  onLangChange,
  soundMuted,
  onToggleSound,
  onOpenSettings,
  onOpenHelp,
  onFullscreen,
  onPlay,
}) => (
  <>
    <div className="pointer-events-none fixed inset-0 z-30 bg-gradient-to-b from-[#050b14]/30 via-[#0b1520]/22 to-[#050b14]/35" />
    <div className="pointer-events-none fixed inset-0 z-40 animate-in fade-in duration-500">
      {/* Language switcher top-left */}
      <div className="pointer-events-auto absolute left-1.5 top-1.5 z-10 flex items-center gap-1.5 sm:left-2 sm:top-2 sm:gap-2 [@media(max-height:500px)]:gap-1.5">
        <LanguageSwitcher lang={lang} onChange={onLangChange} />
      </div>

      <TopIconBar
        t={t}
        soundMuted={soundMuted}
        onToggleSound={onToggleSound}
        onOpenSettings={onOpenSettings}
        onOpenHelp={onOpenHelp}
        onFullscreen={onFullscreen}
      />

      {/* Title */}
      <div className="menu-title pointer-events-none absolute inset-x-4 top-[6%] text-center [@media(max-height:500px)]:top-[3.75rem]">
        <h1 className="font-freckle leading-[0.85] tracking-wide drop-shadow-[0_8px_28px_rgba(0,0,0,0.95)]">
          <span className="block text-[6rem] text-transparent bg-clip-text bg-gradient-to-b from-[#a8c8ea] via-[#7fd4e6] to-[#4ade80] sm:text-[11rem] [@media(max-height:500px)]:text-[6rem]">
            {t.appName}
          </span>
          <span className="block mt-1 whitespace-nowrap text-4xl text-transparent bg-clip-text bg-gradient-to-b from-[#86efac] via-[#4ade80] to-[#0e4a6e] drop-shadow-[0_0_28px_rgba(34,197,94,0.55)] sm:text-6xl [@media(max-height:500px)]:text-4xl [@media(max-height:500px)]:mt-1">
            {t.appSubtitle}
          </span>
        </h1>
      </div>

      {/* Play button */}
      <div className="pointer-events-auto absolute left-1/2 top-[72%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center [@media(max-height:500px)]:top-[78%]">
        <button
          onClick={onPlay}
          className="group relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#ecff66] via-[#b7f83d] to-[#6aa80f] text-[#052e1a] shadow-[0_0_34px_rgba(190,242,100,0.65),0_12px_32px_rgba(0,0,0,0.55)] transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_46px_rgba(217,249,157,0.85),0_16px_42px_rgba(0,0,0,0.6)] active:scale-95 sm:h-24 sm:w-24 [@media(max-height:500px)]:h-12 [@media(max-height:500px)]:w-12"
          aria-label={t.menuPlayAria}
        >
          <Play className="ml-1 h-10 w-10 fill-current drop-shadow-[0_3px_10px_rgba(0,0,0,0.35)] transition-transform duration-200 group-hover:scale-110 sm:h-12 sm:w-12 [@media(max-height:500px)]:ml-0.5 [@media(max-height:500px)]:h-6 [@media(max-height:500px)]:w-6" />
        </button>
        <span className="mt-6 font-freckle text-xl tracking-[0.3em] text-[#d9f99d] drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)] [@media(max-height:500px)]:mt-4 [@media(max-height:500px)]:text-base">
          {t.menuPlay}
        </span>
      </div>
    </div>
  </>
);
