import { useRef, useState } from "react";

interface RunTimerState {
  startedAt: number;
  finalTime: number;
  running: boolean;
}

/**
 * Stopwatch for a single level run.
 * - Consumer starts the timer on first input (see game loop in App).
 * - Consumer calls stop() when the level ends → freezes finalTime.
 * - reset() clears everything back to zero.
 */
export const useRunTimer = () => {
  const [runTime, setRunTime] = useState(0);
  const timerRef = useRef<RunTimerState>({
    startedAt: 0,
    finalTime: 0,
    running: false,
  });

  const start = () => {
    timerRef.current.startedAt = performance.now();
    timerRef.current.running = true;
  };

  const tick = () => {
    if (timerRef.current.running) {
      setRunTime((performance.now() - timerRef.current.startedAt) / 1000);
    }
  };

  /** Stops the timer and returns the elapsed time (freezes `finalTime`). */
  const stop = (): number => {
    if (timerRef.current.running) {
      timerRef.current.finalTime =
        (performance.now() - timerRef.current.startedAt) / 1000;
      timerRef.current.running = false;
    }
    return timerRef.current.finalTime;
  };

  const reset = () => {
    timerRef.current = { startedAt: 0, finalTime: 0, running: false };
    setRunTime(0);
  };

  /** Current display value (live while running, frozen after stop). */
  const displayTime = timerRef.current.running ? runTime : timerRef.current.finalTime;

  return {
    displayTime,
    isRunning: () => timerRef.current.running,
    hasFinalTime: () => timerRef.current.finalTime !== 0,
    finalTime: () => timerRef.current.finalTime,
    start,
    tick,
    stop,
    reset,
  };
};
