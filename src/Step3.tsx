import "./App.css";
import { useState } from "react";
import { Drawer } from "vaul";
import { PlayCircle } from "lucide-react";
import Timer from "@/components/ui/Timer";

export default function Step2() {
  // const [count, setCount] = useState(0)
  const [stepTime, setStepTime] = useState<number>(0);

  return (
    <div>
      <Drawer.Root shouldScaleBackground>
        <h3 className="text-sm tracking-wider text-slate-400 font-medium">
          STEP 3
        </h3>
        <h1 className="text-2xl text-slate-50 mb-8">Baking</h1>
        <ol className="list-decimal text-left ml-6">
          <li className="text-xl text-slate-200 mb-8">
            Place the bread dough into a preheated oven, with the lid on, for{" "}
            <Drawer.Trigger
              className="bg-slate-950 underline p-0 underline-offset-2 inline"
              onClick={() => setStepTime(15 * 60)}
            >
              15 minutes <PlayCircle className="inline ml-1" />
            </Drawer.Trigger>
          </li>
          <li className="text-xl text-slate-200 mb-8">
            Take it out of the oven, remove the lid, then put back in to bake for another{" "}
            <Drawer.Trigger
              className="bg-slate-950 underline p-0 underline-offset-2 inline"
              onClick={() => setStepTime(15 * 60)}
            >
              15 minutes <PlayCircle className="inline ml-1" />
            </Drawer.Trigger>
            <br />
            <br />
            Keep an eye on it — every oven is different, so you may need longer
            or shorter.
          </li>
          <li className="text-xl text-slate-200 mb-8">
            Take the bread out and let it cool for{" "}
            <Drawer.Trigger
              className="bg-slate-950 underline p-0 underline-offset-2 inline"
              onClick={() => setStepTime(5 * 60)}
            >
              5 minutes <PlayCircle className="inline ml-1" />
            </Drawer.Trigger>
            , then turn out the bread onto a wire rack{" "}
          </li>
          <li className="text-xl text-slate-200 mb-8">
            Wait at least half an hour before cutting into it — the inside is
            still baking and needs to cool down!
          </li>
        </ol>
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
                <Timer time={stepTime} />
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
      </Drawer.Root>
    </div>
  );
}
