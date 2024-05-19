import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
// @ts-ignore
import useSound from "use-sound";
// import finishedSound from "@/assets/sounds/finished.m4a";
// import expandSound from "@/assets/sounds/Expand.m4a";

export default function ToastTimer({ time }: { time: number }) {
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(time);
  const [timeAsPercent, setTimeAsPercent] = useState(100);

  // const [play] = useSound(finishedSound);
  // const [playExpand] = useSound(expandSound);

  // when the drawer is opened from a new timer
  useEffect(() => {
    setTimeLeft(time);
    setTimeAsPercent(100);
    setIsRunning(true); // this autostarts the timer
    // playExpand();
  }, [time]);

  // while timeleft is changing / isrunning changes, countdown
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          const newTime = prevTime - 1;
          if (newTime <= 0) {
            clearInterval(interval!); // Clear interval if time is up
            setIsRunning(false); // Stop the timer
            setTimeAsPercent(0);
            // play();
            return 0; // Don't allow the time to go below zero
          }
          setTimeAsPercent((newTime / time) * 100); // Update the time as percent
          console.log(timeAsPercent);
          return newTime; // Update the time left
        });
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeLeft]);

  function timeAsMinutes(time: number): string {
    return Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
  }

  function timeAsSeconds(time: number): string {
    return (time % 60).toString().padStart(2, "0");
  }

  return (
    <div className="text-center">
      <Progress value={timeAsPercent} className="my-4 w-full" />
      <p className="text-4xl text-twine-950 text-center">
        {timeAsMinutes(timeLeft) + ":" + timeAsSeconds(timeLeft)}
      </p>
    </div>
  );
}
