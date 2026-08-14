export const RENDER_WIDTH = 640;
export const RENDER_HEIGHT = 640;
export const ASPECT_RATIO = RENDER_WIDTH / RENDER_HEIGHT; // 1:1

// Bazowe parametry kadru (desktop 4:3). Używane do wyliczenia pionowego FOV
// przy innych proporcjach, tak aby poziome pole widzenia nigdy się nie zawężało.
export const BASE_VERTICAL_FOV = 38;
export const MAX_VERTICAL_FOV = 64;

export interface ResolutionProfile {
  id: string;
  label: string;
  width: number;
  height: number;
}

/**
 * Natywne rozdzielczości renderowania. Canvas nigdy nie renderuje w rozdzielczości
 * ekranu — zawsze w jednej z poniższych, a CSS tylko ją skaluje z zachowaniem proporcji.
 */
export const RESOLUTION_PROFILES: Record<string, ResolutionProfile> = {
  desktop: { id: "desktop", label: "640×360 · 16:9", width: 640, height: 360 },
  tabletPortrait: { id: "tabletPortrait", label: "480×640 · 3:4", width: 480, height: 640 },
  phonePortrait: { id: "phonePortrait", label: "400×660 · 10:16", width: 400, height: 660 },
  phoneLandscape: { id: "phoneLandscape", label: "640×360 · 16:9", width: 640, height: 360 },
};

/** Dobiera natywną rozdzielczość na podstawie rozmiaru okna przeglądarki. */
export function pickResolutionProfile(vw: number, vh: number): ResolutionProfile {
  const isPortrait = vh >= vw;
  const shortSide = Math.min(vw, vh);

  if (isPortrait) {
    // Telefon w pionie → wysoki kadr, świetny do wspinaczki po wieży
    if (shortSide < 620) return RESOLUTION_PROFILES.phonePortrait;
    // Tablet w pionie → łagodniejsze 3:4
    return RESOLUTION_PROFILES.tabletPortrait;
  }

  // Na desktopie i mobile landscape domyślnie używamy szerokiego 16:9 (640x360)
  return RESOLUTION_PROFILES.desktop;
}

export const CIRCUMFERENCE_STEPS = 24;
export const STEP_HEIGHT = 1;
export const PLAYER_HALF_WIDTH = 0.16; // Full body collision: head, torso, legs
export const WALK_SPEED = 3.6;
export const JUMP_SPEED = 11.2;
export const GRAVITY = 28.5;
export const TOWER_RADIUS = 6;
export const PLATFORM_THICKNESS = 0.35;
export const PLATFORM_DEPTH = 2.2;
export const TAU = Math.PI * 2;
export const PLAYER_STAND_RADIUS = TOWER_RADIUS + PLATFORM_DEPTH * 0.5;
export const FIRST_STEP_CENTER = 0.5;
export const TOWER_ANGLE_OFFSET = -(FIRST_STEP_CENTER / CIRCUMFERENCE_STEPS) * TAU;
export const PLAYER_FOOT_OFFSET = 0.52;

// Fixed Physics Timestep: 60Hz (Physics tempo remains 100% constant even if FPS drops)
export const FIXED_DT = 1 / 60;
export const MAX_ACCUMULATOR = 0.25;

export const wrapValue = (value: number, size: number): number => {
  const wrapped = value % size;
  return wrapped < 0 ? wrapped + size : wrapped;
};

export const stepToTheta = (stepIndex: number): number =>
  (stepIndex / CIRCUMFERENCE_STEPS) * TAU + TOWER_ANGLE_OFFSET;

export const overlapsWrapped = (
  playerX: number,
  halfWidth: number,
  platformX: number,
  platformWidth: number
): boolean => {
  const tries = [playerX - CIRCUMFERENCE_STEPS, playerX, playerX + CIRCUMFERENCE_STEPS];
  return tries.some(
    (px) => px + halfWidth > platformX && px - halfWidth < platformX + platformWidth
  );
};

/**
 * Indeks schodka, na którym leży dany punkt obwodu.
 * Schodek zajmuje przedział [n, n+1), więc podłoga daje jego numer.
 */
export const stairIndexAt = (x: number): number =>
  Math.floor(wrapValue(x, CIRCUMFERENCE_STEPS));

/** Środek schodka o danym indeksie, w krokach obwodu. */
export const stairCenterX = (stepIndex: number): number =>
  wrapValue(stepIndex, CIRCUMFERENCE_STEPS) + 0.5;

export const wrappedStepDistance = (a: number, b: number): number => {
  const direct = Math.abs(a - b);
  return Math.min(direct, CIRCUMFERENCE_STEPS - direct);
};
