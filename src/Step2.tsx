import "./App.css";
import { useState } from "react";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import { PlayCircle } from "lucide-react";
import DrawerTimer from "@/components/DrawerTimer";

export default function Step2() {
  // const [count, setCount] = useState(0)
  const [stepTime, setStepTime] = useState<number>(0);

  return (
    <div>
      <Drawer shouldScaleBackground>
        <h3 className="text-sm tracking-wider text-twine-600 font-medium">
          STEP 2
        </h3>
        <h1 className="text-3xl font-serif text-twine-950 mb-8">The Knock Back</h1>
        <ol className="list-decimal text-left ml-6">
          <li className="text-xl text-twine-900 mb-8">
            Your dough should have doubled in size. Knock back the air and then
            reshape it into a ball.
          </li>
          <li className="text-xl text-twine-900 mb-8">
            Oil the Dutch oven or casserole dish, making sure to oil the walls
            as well as the base, then place the dough inside.
          </li>
          <li className="text-xl text-twine-900 mb-8">
            Add a little dusting of flour to keep the moisture in, then cover
            with a tea towel and rest for another{" "}
            <DrawerTrigger
              className="bg-twine-100 underline p-0 underline-offset-2 inline"
              onClick={() => setStepTime(90 * 60)}
            >
              90 minutes <PlayCircle className="inline ml-1" />
            </DrawerTrigger>
            <br />
            <div className="text-base leading-5 text-twine-600 list-none mt-2">
            10 minutes before finishing this second prove, preheat the oven to
            220ºC
            </div>
          </li>
        </ol>
        <DrawerTimer time={stepTime}/>
      </Drawer>
    </div>
  );
}