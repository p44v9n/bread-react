import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

export default function Timer({ time: initialTime }: { time: number }) {
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [timeAsPercent, setTimeAsPercent] = useState(100);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          const newTime = prevTime - 1;
          if (newTime <= 0) {
            clearInterval(interval!); // Clear interval if time is up
            setIsRunning(false); // Stop the timer
            return 0; // Don't allow the time to go below zero
          }
          setTimeAsPercent((newTime / initialTime) * 100); // Update the time as percent
          return newTime; // Update the time left
        });
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, initialTime]);

  return (
    <>
      <Progress value={timeAsPercent} className="my-4" />
      <p>{timeLeft}s</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Pause" : "Start"}
      </button>
    </>
  );
}
