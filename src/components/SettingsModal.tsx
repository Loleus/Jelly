import React from "react";
import { CheckCircle2, Cpu, Sparkles, Volume2, VolumeX, X, Zap } from "lucide-react";
import { EngineConfig } from "../engine/gameTypes";
import type { Translation } from "../i18n";
import { MODAL_BACKDROP, MODAL_PANEL_SETTINGS } from "../ui/styles";

interface SettingsModalProps {
  t: Translation;
  config: EngineConfig;
  onConfigChange: (c: Partial<EngineConfig>) => void;
  isOpen: boolean;
  onClose: () => void;
}

/** A single option tile in the render/filter grids. */
const OptionButton: React.FC<{
  active: boolean;
  onClick: () => void;
  align?: "left" | "center";
  children: React.ReactNode;
}> = ({ active, onClick, align = "left", children }) => (
  <button
    onClick={onClick}
    className={`rounded-2xl p-4 text-${align} ${
      active ? "bg-emerald-400 text-[#052e1a]" : "bg-sky-900/60 text-sky-100"
    }`}
  >
    {children}
  </button>
);

export const SettingsModal: React.FC<SettingsModalProps> = ({
  t,
  config,
  onConfigChange,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const filterModes: Array<{ id: EngineConfig["filterMode"]; name: string }> = [
    { id: "crisp", name: t.filterPixelated },
    { id: "smooth", name: t.filterSmooth },
    { id: "crt", name: t.filterCrt },
  ];

  return (
    <div className={MODAL_BACKDROP}>
      <div className={MODAL_PANEL_SETTINGS}>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg bg-sky-900/60 p-1.5 text-sky-200 hover:bg-sky-800"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2.5 tracking-wide text-amber-200 pb-3">
          <Zap className="h-6 w-6 text-amber-300" />
          <h2 className="text-2xl tracking-wide">{t.settingsTitle}</h2>
        </div>
        <div className="mt-4 space-y-5 text-base tracking-wide">
          {/* Render scale */}
          <div>
            <label className="text-sm tracking-wide text-sky-200 flex items-center gap-1.5 mb-2">
              <Cpu className="h-5 w-5 text-sky-300" />
              {t.render}
            </label>
            <div className="grid grid-cols-2 gap-2">
              <OptionButton
                active={config.renderScale === 1}
                onClick={() => onConfigChange({ renderScale: 1 })}
              >
                <div className="text-base">x1</div>
                <div className="text-sm opacity-80">{t.renderFast}</div>
              </OptionButton>
              <OptionButton
                active={config.renderScale === 2}
                onClick={() => onConfigChange({ renderScale: 2 })}
              >
                <div className="text-base">x2</div>
                <div className="text-sm opacity-80">{t.renderSharp}</div>
              </OptionButton>
            </div>
          </div>

          {/* Filter mode */}
          <div>
            <label className="text-sm tracking-wide text-sky-200 flex items-center gap-1.5 mb-2">
              <Sparkles className="h-5 w-5 text-amber-300" />
              {t.imageFilter}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {filterModes.map((m) => (
                <OptionButton
                  key={m.id}
                  active={config.filterMode === m.id}
                  onClick={() => onConfigChange({ filterMode: m.id })}
                  align="center"
                >
                  <div className="text-base tracking-wide">{m.name}</div>
                </OptionButton>
              ))}
            </div>
          </div>

          {/* Sound toggle */}
          <div>
            <button
              onClick={() => onConfigChange({ soundMuted: !config.soundMuted })}
              className="flex w-full items-center justify-between rounded-2xl bg-sky-900/60 px-4 py-3 text-sky-100"
            >
              <div className="flex items-center gap-2.5">
                {config.soundMuted ? (
                  <VolumeX className="h-6 w-6 text-rose-300" />
                ) : (
                  <Volume2 className="h-6 w-6 text-emerald-300" />
                )}
                <span className="tracking-wide text-base">
                  {config.soundMuted ? t.muted : t.soundOn}
                </span>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-sm tracking-wide ${
                  config.soundMuted ? "bg-rose-400 text-white" : "bg-emerald-400 text-[#052e1a]"
                }`}
              >
                {config.soundMuted ? "OFF" : "ON"}
              </span>
            </button>
          </div>
        </div>
        <div className="mt-5 flex justify-end">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 rounded-xl bg-emerald-400 px-5 py-2.5 text-base tracking-wide text-[#052e1a] hover:bg-emerald-300"
          >
            <CheckCircle2 className="h-5 w-5" />
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
};
