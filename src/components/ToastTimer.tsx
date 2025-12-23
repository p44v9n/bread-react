import { useEffect, useState, useRef, useCallback } from "react";
import { Progress } from "@/components/ui/progress";
// @ts-ignore
import useSound from "use-sound";
import finishedSound from "@/assets/sounds/finished.m4a";

const STORAGE_KEY = "bread-toast-timer";

interface TimerState {
  endTime: number;
  totalDuration: number;
}

export default function ToastTimer({ time }: { time: number }) {
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(time);
  const [timeAsPercent, setTimeAsPercent] = useState(100);
  const endTimeRef = useRef<number>(0);
  const totalDurationRef = useRef<number>(time);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const notificationPermissionRef = useRef<boolean>(false);

  const [play] = useSound(finishedSound);

  // Save timer state to localStorage
  const saveTimerState = useCallback(() => {
    const state: TimerState = {
      endTime: endTimeRef.current,
      totalDuration: totalDurationRef.current,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, []);

  // Clear saved timer state
  const clearTimerState = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  // Request notification permission on mount
  useEffect(() => {
    if ("Notification" in window) {
      Notification.requestPermission().then((permission) => {
        notificationPermissionRef.current = permission === "granted";
      });
    }
  }, []);

  // Update timer display based on current time
  const updateTimer = useCallback(() => {
    if (!isRunning) return;

    const now = Date.now();
    const remaining = Math.max(0, endTimeRef.current - now);
    const newTimeLeft = Math.ceil(remaining / 1000);

    if (newTimeLeft <= 0) {
      setTimeLeft(0);
      setTimeAsPercent(0);
      setIsRunning(false);
      clearTimerState();
      play();

      if (notificationPermissionRef.current) {
        new Notification("Timer Complete!", {
          body: "Your timer has finished",
          icon: "/icon-192.png",
          badge: "/icon-192.png",
          tag: "bread-timer-notification",
        });
      }
      return;
    }

    setTimeLeft(newTimeLeft);
    setTimeAsPercent((newTimeLeft / totalDurationRef.current) * 100);
  }, [isRunning, play, clearTimerState]);

  // Start a new timer when time prop changes
  // Note: We intentionally DON'T restore from localStorage here because
  // each click on a timer button should start a fresh timer for that duration.
  // The localStorage is only used to persist the current timer if the page is
  // refreshed or the app is closed and reopened.
  useEffect(() => {
    // Clear any existing saved state - user is starting a new timer
    clearTimerState();
    
    // Start fresh timer with the new time
    setTimeLeft(time);
    setTimeAsPercent(100);
    totalDurationRef.current = time;
    endTimeRef.current = Date.now() + time * 1000;
    setIsRunning(true);
    
    // Save the new timer state
    const state: TimerState = {
      endTime: Date.now() + time * 1000,
      totalDuration: time,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [time, clearTimerState]);

  // Main timer loop using setInterval with timestamp checking
  // setInterval continues running (though throttled) when tab is hidden
  // unlike requestAnimationFrame which pauses completely
  useEffect(() => {
    if (isRunning) {
      // Check timestamps every 250ms for smooth updates
      intervalRef.current = setInterval(updateTimer, 250);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isRunning, updateTimer]);

  // Handle visibility change - immediately recalculate when tab becomes visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden && isRunning) {
        // Tab became visible - immediately update timer
        updateTimer();
      } else if (document.hidden && isRunning && timeLeft > 0) {
        // Tab became hidden - show notification and save state
        saveTimerState();
        if (notificationPermissionRef.current) {
          new Notification("Timer Running", {
            body: `${timeAsMinutes(timeLeft)}:${timeAsSeconds(timeLeft)} remaining`,
            icon: "/icon-192.png",
            badge: "/icon-192.png",
            tag: "bread-timer-notification",
            silent: true,
          });
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isRunning, timeLeft, updateTimer, saveTimerState]);

  // Save state before page unload
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (isRunning) {
        saveTimerState();
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isRunning, saveTimerState]);

  function timeAsMinutes(time: number): string {
    return Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
  }

  function timeAsSeconds(time: number): string {
    return (time % 60).toString().padStart(2, "0");
  }

  return (
    <div className="text-center text-balance">
      <Progress value={timeAsPercent} className="my-4 w-full" />
      <p className="text-4xl text-twine-950 text-center text-balance">
        {timeAsMinutes(timeLeft) + ":" + timeAsSeconds(timeLeft)}
      </p>
    </div>
  );
}
