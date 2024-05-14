import "./App.css";
import { useState } from "react";
// import { Drawer } from "vaul";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import { PlayCircle } from "lucide-react";

import DrawerTimer from "@/components/DrawerTimer";

export default function Step2() {
  // const [count, setCount] = useState(0)
  const [stepTime, setStepTime] = useState<number>(0);

  return (
    <div>
      <Drawer>
        <h3 className="text-sm tracking-wider text-twine-600 font-medium">
          STEP 3
        </h3>
        <h1 className="text-3xl font-serif text-twine-950 mb-8">Baking</h1>
        <ol className="list-decimal text-left ml-6">
          <li className="text-xl text-twine-900 mb-8">
            Place the bread dough into a preheated oven, with the lid on, for{" "}
            <DrawerTrigger
              className="bg-twine-100 underline p-0 underline-offset-2 inline"
              onClick={() => setStepTime(15 * 60)}
            >
              15 minutes <PlayCircle className="inline ml-1" />
            </DrawerTrigger>
          </li>
          <li className="text-xl text-twine-900 mb-8">
            Take it out of the oven, remove the lid, then put back in to bake for another{" "}
            <DrawerTrigger
              className="bg-twine-100 underline p-0 underline-offset-2 inline"
              onClick={() => setStepTime(15 * 60)}
            >
              15 minutes <PlayCircle className="inline ml-1" />
            </DrawerTrigger>
            <br />
            <br />
            Keep an eye on it — every oven is different, so you may need longer
            or shorter.
          </li>
          <li className="text-xl text-twine-900 mb-8">
            Take the bread out and let it cool for{" "}
            <DrawerTrigger
              className="bg-twine-100 underline p-0 underline-offset-2 inline"
              onClick={() => setStepTime(5 * 60)}
            >
              5 minutes <PlayCircle className="inline ml-1" />
            </DrawerTrigger>
            , then turn out the bread onto a wire rack{" "}
          </li>
          <li className="text-xl text-twine-900 mb-8">
            Wait at least half an hour before cutting into it — the inside is
            still baking and needs to cool down!
          </li>
        </ol>
        <DrawerTimer time={stepTime} />
      </Drawer>
    </div>
  );
}
