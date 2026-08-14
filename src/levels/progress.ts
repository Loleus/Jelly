export interface LevelBestScore {
  jumps: number;
  timeSec: number;
}

export interface SavedProgress {
  completedLevels: number[];
  unlockedLevel: number;
  bestScores: Record<string, LevelBestScore>;
}

const STORAGE_KEY = "glower-tower-progress-v5";
const TOTAL_FALLBACK = 2;

function getTotalLevels(): number {
  return TOTAL_FALLBACK;
}

function freshProgress(): SavedProgress {
  return {
    completedLevels: [],
    unlockedLevel: 1,
    bestScores: {},
  };
}

export function loadProgress(): SavedProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return freshProgress();

    const parsed = JSON.parse(raw) as SavedProgress;
    if (
      !Array.isArray(parsed.completedLevels) ||
      typeof parsed.unlockedLevel !== "number"
    ) {
      return freshProgress();
    }

    const unlocked = Math.max(1, Math.min(parsed.unlockedLevel, getTotalLevels() + 1));
    return {
      completedLevels: parsed.completedLevels.filter((n) => n >= 1 && n <= getTotalLevels()),
      unlockedLevel: unlocked,
      bestScores: parsed.bestScores ?? {},
    };
  } catch {
    return freshProgress();
  }
}

function saveProgress(progress: SavedProgress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // storage full or unavailable — no big deal
  }
}

export function markLevelCompleted(
  levelNumber: number,
  allGems: boolean,
  jumps: number,
  timeSec: number,
  totalLevels: number,
): SavedProgress {
  const progress = loadProgress();
  const completedSet = new Set(progress.completedLevels);
  completedSet.add(levelNumber);
  const maxCompleted =
    completedSet.size > 0 ? Math.max(...Array.from(completedSet)) : 0;

  const unlocked = Math.min(totalLevels, maxCompleted + 1);

  const bestScores = { ...progress.bestScores };
  const key = String(levelNumber);
  const existing = bestScores[key];
  if (!existing || (allGems && (jumps < existing.jumps || timeSec < existing.timeSec))) {
    bestScores[key] = { jumps, timeSec };
  }

  const next: SavedProgress = {
    completedLevels: Array.from(completedSet).sort((a, b) => a - b),
    unlockedLevel: unlocked,
    bestScores,
  };

  saveProgress(next);
  return next;
}

export function isUnlocked(levelNumber: number, progress: SavedProgress): boolean {
  if (levelNumber === 1) return true;
  return progress.completedLevels.includes(levelNumber - 1);
}

export function isCompleted(levelNumber: number, progress: SavedProgress): boolean {
  return progress.completedLevels.includes(levelNumber);
}

export function resetProgress(): SavedProgress {
  const fresh = freshProgress();
  saveProgress(fresh);
  return fresh;
}
