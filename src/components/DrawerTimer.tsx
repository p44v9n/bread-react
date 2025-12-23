import { useEffect, useState, useRef, useCallback } from "react";
import { Progress } from "@/components/ui/progress";
import {
  DrawerPortal,
  DrawerOverlay,
  DrawerContent,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { CircleX, PauseCircle, PlayCircle } from "lucide-react";
// @ts-ignore
import useSound from "use-sound";
import finishedSound from "@/assets/sounds/finished.m4a";
import expandSound from "@/assets/sounds/Expand.m4a";

const STORAGE_KEY = "bread-drawer-timer";

interface TimerState {
  endTime: number;
  totalDuration: number;
  isPaused: boolean;
  remainingWhenPaused: number;
}

export default function DrawerTimer({ time }: { time: number }) {
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(time);
  const [timeAsPercent, setTimeAsPercent] = useState(100);
  const endTimeRef = useRef<number>(0);
  const totalDurationRef = useRef<number>(time);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [play] = useSound(finishedSound);
  const [playExpand] = useSound(expandSound);

  // Save timer state to localStorage
  const saveTimerState = useCallback(() => {
    const state: TimerState = {
      endTime: endTimeRef.current,
      totalDuration: totalDurationRef.current,
      isPaused: !isRunning,
      remainingWhenPaused: timeLeft,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [isRunning, timeLeft]);

  // Clear saved timer state
  const clearTimerState = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
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
      return;
    }

    setTimeLeft(newTimeLeft);
    setTimeAsPercent((newTimeLeft / totalDurationRef.current) * 100);
  }, [isRunning, play, clearTimerState]);

  // Restore timer state on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const state: TimerState = JSON.parse(saved);
        const now = Date.now();
        
        if (state.isPaused) {
          // Timer was paused - restore paused state
          setTimeLeft(state.remainingWhenPaused);
          setTimeAsPercent((state.remainingWhenPaused / state.totalDuration) * 100);
          totalDurationRef.current = state.totalDuration;
          setIsRunning(false);
        } else if (state.endTime > now) {
          // Timer was running and hasn't expired
          const remaining = Math.ceil((state.endTime - now) / 1000);
          setTimeLeft(remaining);
          setTimeAsPercent((remaining / state.totalDuration) * 100);
          endTimeRef.current = state.endTime;
          totalDurationRef.current = state.totalDuration;
          setIsRunning(true);
        } else {
          // Timer expired while app was closed
          setTimeLeft(0);
          setTimeAsPercent(0);
          clearTimerState();
          play();
        }
      } catch {
        clearTimerState();
      }
    }
  }, []);

  // When time prop changes (new timer started)
  useEffect(() => {
    setTimeLeft(time);
    setTimeAsPercent(100);
    setIsRunning(false);
    totalDurationRef.current = time;
    endTimeRef.current = 0;
    clearTimerState();
    playExpand();
  }, [time, clearTimerState, playExpand]);

  // Main timer loop using setInterval with timestamp checking
  useEffect(() => {
    if (isRunning) {
      // Use setInterval but check actual timestamps for accuracy
      intervalRef.current = setInterval(updateTimer, 250); // Check 4x per second for smoother updates
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isRunning, updateTimer]);

  // Handle visibility change - recalculate when tab becomes visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden && isRunning) {
        updateTimer();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isRunning, updateTimer]);

  // Save state before page unload
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (isRunning || timeLeft > 0) {
        saveTimerState();
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isRunning, timeLeft, saveTimerState]);

  // Toggle play/pause
  const toggleTimer = () => {
    if (isRunning) {
      // Pausing
      setIsRunning(false);
      saveTimerState();
    } else {
      // Resuming - set new end time based on remaining time
      endTimeRef.current = Date.now() + timeLeft * 1000;
      setIsRunning(true);
      saveTimerState();
    }
  };

  function timeAsMinutes(time: number): string {
    return Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
  }

  function timeAsSeconds(time: number): string {
    return (time % 60).toString().padStart(2, "0");
  }

  return (
    <>
      <DrawerPortal>
        <DrawerOverlay className="fixed inset-0" />
        <DrawerContent className="flex bg-twine-100 flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0">
          <div className="p-4 rounded-t-[10px] flex-1">
            <div className="max-w-md mx-auto flex flex-col justify-between h-[94%]">
              <DrawerTitle className="font-medium mb-4 twine-950">
                Timer
              </DrawerTitle>
              <div>
                <Progress value={timeAsPercent} className="my-4" />
                <p className="text-4xl text-twine-950 text-center text-balance">
                  {timeAsMinutes(timeLeft) + ":" + timeAsSeconds(timeLeft)}
                </p>
              </div>
              <div className="flex flex-row w-full gap-2">
                <DrawerClose className="bg-rose-950 p-0 rounded-full w-1/2">
                  <Button className="rounded-full text-rose-50 bg-rose-950 hover:bg-rose-950 w-full">
                    <CircleX />
                    &nbsp;Cancel
                  </Button>
                </DrawerClose>
                <Button
                  onClick={toggleTimer}
                  className="w-1/2 text-twine-950"
                  variant={"secondary"}
                  disabled={timeLeft <= 0}
                >
                  {isRunning ? <PauseCircle /> : <PlayCircle />}&nbsp;
                  {isRunning ? "Pause" : "Resume"}
                </Button>
              </div>
            </div>
          </div>
        </DrawerContent>
      </DrawerPortal>
    </>
  );
}
