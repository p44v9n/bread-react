import "./App.css";
import { Drawer } from "vaul";
import { PlayCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function Step2() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Drawer.Root shouldScaleBackground>
        <h3 className="text-sm tracking-wider text-slate-400 font-medium">
          STEP 2
        </h3>
        <h1 className="text-2xl text-slate-50 mb-8">The Knock Back</h1>
        <ol className="list-decimal text-left ml-6">
          <li className="text-xl text-slate-200 mb-8">
            Your dough should have doubled in size. Knock back the air and then
            reshape it into a ball.
          </li>
          <li className="text-xl text-slate-200 mb-8">
            Oil the Dutch oven or casserole dish, making sure to oil the walls
            as well as the base, then place the dough inside.
          </li>
          <li className="text-xl text-slate-200 mb-8">
            Add a little dusting of flour to keep the moisture in, then cover
            with a tea towel and rest for another{" "}
            <Drawer.Trigger className="bg-slate-950 underline p-0 underline-offset-2 inline">
              90 minutes <PlayCircle className="inline ml-1" />
            </Drawer.Trigger>
          </li>
          <li className="text-l text-slate-400 ml-8 list-none mb-4">
            10 minutes before finishing this second prove, preheat the oven to
            220ºC{" "}
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
                <Progress value={33} className="mb-4" />
                <p className="text-slate-300 mb-2">
                  This component can be used as a replacement for a Dialog on
                  mobile and tablet devices.
                </p>
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