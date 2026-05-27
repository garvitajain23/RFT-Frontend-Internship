// ============================================================
// CUSTOM HOOK: useTimer
// ============================================================
// A "hook" in React is a special function that starts with "use"
// and lets you plug into React features (like state and effects)
// from inside a functional component.
//
// WHY a custom hook here?
// The timer logic (counting down, resetting, stopping) would
// clutter our component files. We extract it here to keep
// things clean — this is called "separation of concerns".
//
// This hook:
//   - Accepts: duration (seconds), onExpire callback
//   - Returns: { timeLeft, isRunning, resetTimer }
// ============================================================

import { useState, useEffect, useCallback } from "react";

const useTimer = (duration, onExpire) => {
  // timeLeft stores how many seconds remain
  // We start it at the full duration
  const [timeLeft, setTimeLeft] = useState(duration);

  // isRunning tracks whether the timer is actively counting
  const [isRunning, setIsRunning] = useState(true);

  // useEffect runs AFTER every render.
  // The dependency array [timeLeft, isRunning] means:
  // "re-run this effect whenever timeLeft or isRunning changes"
  useEffect(() => {
    // If timer is stopped or already at 0, do nothing
    if (!isRunning || timeLeft <= 0) {
      // If time ran out, call the onExpire callback (e.g. auto-advance question)
      if (timeLeft === 0 && isRunning) {
        onExpire();
        setIsRunning(false);
      }
      return; // Exit the effect early
    }

    // setInterval runs a function repeatedly every X milliseconds
    // Here: every 1000ms (1 second), we subtract 1 from timeLeft
    const intervalId = setInterval(() => {
      setTimeLeft((prev) => prev - 1); // prev = previous value of timeLeft
    }, 1000);

    // CLEANUP FUNCTION:
    // React runs this before re-running the effect or when the
    // component unmounts. This prevents memory leaks by clearing
    // the old interval before starting a new one.
    return () => clearInterval(intervalId);
  }, [timeLeft, isRunning, onExpire]);

  // useCallback memoizes (caches) the function so it doesn't
  // get re-created on every render — good for performance.
  const resetTimer = useCallback(() => {
    setTimeLeft(duration); // Reset to full duration
    setIsRunning(true); // Start counting again
  }, [duration]);

  // We return these values so any component using this hook
  // can access them
  return { timeLeft, isRunning, resetTimer };
};

export default useTimer;
