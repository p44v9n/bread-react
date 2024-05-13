import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Drawer } from "vaul";

export default function DrawerTimer({ time }: { time: number }) {
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(time);
  const [timeAsPercent, setTimeAsPercent] = useState(100);

  // when the drawer is opened from a new timer
  useEffect(() => {
    setTimeLeft(time);
    setIsRunning(false); // change this to auto start it
  }, [time])

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
          setTimeAsPercent((newTime / time) * 100); // Update the time as percent
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

  return (
    <>
    <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="bg-slate-500 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0">
            <div className="p-4 bg-slate-700 rounded-t-[10px] flex-1">
              <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-slate-300 mb-8" />
              <div className="max-w-md mx-auto">
                <Drawer.Title className="font-medium mb-4 slate-950">
                  Timer
                </Drawer.Title>
                <p className="text-slate-300 mb-2">
                  This component can be used as a replacement for a Dialog on
                  mobile and tablet devices.
                </p>
                  <Progress value={timeAsPercent} className="my-4" />
                  <p>{timeLeft}</p>
                  <button onClick={() => setIsRunning(!isRunning)} className="text-slate-950 bg-slate-50">
                    {isRunning ? "Pause" : "Start"}
                  </button>
                <p className="text-slate-300 mb-8">
                  It uses{" "}
                  <a
                    href="https://www.radix-ui.com/docs/primitives/components/dialog"
                    className="underline"
                    target="_blank"
                  >
                    Radix&apos;s Dialog primitive
                  </a>{" "}
                  under the hood and is inspired by{" "}
                  <a
                    href="https://twitter.com/devongovett/status/1674470185783402496"
                    className="underline"
                    target="_blank"
                  >
                    this tweet.
                  </a>
                </p>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
    </>
  );
}
