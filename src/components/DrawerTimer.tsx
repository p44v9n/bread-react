import { useEffect, useState } from "react";
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

export default function DrawerTimer({ time }: { time: number }) {
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(time);
  const [timeAsPercent, setTimeAsPercent] = useState(100);

  const [play] = useSound(finishedSound);
  const [playExpand] = useSound(expandSound);

  // when the drawer is opened from a new timer
  useEffect(() => {
    setTimeLeft(time);
    setTimeAsPercent(100);
    setIsRunning(false); // this autostarts the timer
    playExpand();
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
            play();
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
                  onClick={() => setIsRunning(!isRunning)}
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
