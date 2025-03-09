import { useEffect, useState, useRef } from "react";
import { Progress } from "@/components/ui/progress";
// @ts-ignore
import useSound from "use-sound";
import finishedSound from "@/assets/sounds/finished.m4a";
// import expandSound from "@/assets/sounds/Expand.m4a";

export default function ToastTimer({ time }: { time: number }) {
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(time);
  const [timeAsPercent, setTimeAsPercent] = useState(100);
  const endTimeRef = useRef<number>(0);
  const animationFrameRef = useRef<number>();
  const notificationPermissionRef = useRef<boolean>(false);

  const [play] = useSound(finishedSound);
  // const [playExpand] = useSound(expandSound);

  // Request notification permission on mount
  useEffect(() => {
    if ("Notification" in window) {
      Notification.requestPermission().then((permission) => {
        notificationPermissionRef.current = permission === "granted";
      });
    }
  }, []);

  // Handle visibility change
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && isRunning && timeLeft > 0) {
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
  }, [isRunning, timeLeft]);

  // Timer start
  useEffect(() => {
    setTimeLeft(time);
    setTimeAsPercent(100);
    setIsRunning(true);
    endTimeRef.current = Date.now() + time * 1000;
  }, [time]);

  // Timer logic using requestAnimationFrame and timestamps
  useEffect(() => {
    const updateTimer = () => {
      if (!isRunning) return;

      const now = Date.now();
      const remaining = Math.max(0, endTimeRef.current - now);
      const newTimeLeft = Math.ceil(remaining / 1000);

      if (newTimeLeft <= 0) {
        setTimeLeft(0);
        setTimeAsPercent(0);
        setIsRunning(false);
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
      setTimeAsPercent((newTimeLeft / time) * 100);
      animationFrameRef.current = requestAnimationFrame(updateTimer);
    };

    if (isRunning) {
      animationFrameRef.current = requestAnimationFrame(updateTimer);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isRunning, time, play]);

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
