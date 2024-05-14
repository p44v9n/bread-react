import "./App.css";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import { PlayCircle } from "lucide-react";
import DrawerTimer from "@/components/DrawerTimer";
import { useState } from "react";

export default function Step1() {
  // const [count, setCount] = useState(0)
  const [stepTime, setStepTime] = useState<number>(0);

  return (
    <div>
      <Drawer shouldScaleBackground>
        <h3 className="text-sm tracking-wider text-twine-900 font-medium">
          STEP 1
        </h3>
        <h1 className="text-3xl text-twine-950 mb-8 font-serif">Mixing</h1>
        <ol className="list-decimal text-left ml-6">
          <li className="text-xl text-twine-900 mb-8">
            Combine <strong>450ml</strong> of water and <strong>7g</strong> of
            instant yeast in the mixing bowl, until there are no clumps
          </li>
          <li className="text-xl text-twine-900 mb-8">
            Add in <strong>750g</strong> of bread flour, <strong>12g</strong> of
            salt, and <strong>25ml</strong> of olive oil, and mix until all
            ingredients are combined
            <br />
            <div className="text-base leading-5 text-twine-600 list-none mt-2">
              For a heartier bread, use <strong>500g</strong> of strong white
              bread flour and <strong>250g</strong> of wholemeal flour
            </div>
          </li>
          <li className="text-xl text-twine-900 mb-8">
            <span>
              Turn out onto a clean surface and knead for{" "}
              <DrawerTrigger
                className="bg-twine-100 underline p-[4px] underline-offset-2 inline"
                onClick={() => setStepTime(480)}
              >
                8 minutes
                <PlayCircle className="inline ml-1" />
              </DrawerTrigger>
            </span>
          </li>
          <li className="text-xl text-twine-900 mb-8">
            <span>
              Let the dough sit for{" "}
              <DrawerTrigger
                className="bg-twine-100 underline p-[4px] underline-offset-2 inline"
                onClick={() => setStepTime(180)}
              >
                3 minutes
                <PlayCircle className="inline ml-1" />
              </DrawerTrigger>
            </span>
          </li>
          <li className="text-xl text-twine-900 mb-8">
            Shape into a ball, then use a dough scraper to lift back into the
            mixing bowl
          </li>
          <li className="text-xl text-twine-900 mb-8">
            <span>
              Add a little dusting of flour to keep the moisture in, then cover
              with a tea towel and rest for{" "}
              <DrawerTrigger
                className="bg-twine-100 underline p-[4px] underline-offset-2 inline"
                onClick={() => setStepTime(5400)}
              >
                90 minutes
                <PlayCircle className="inline ml-1" />
              </DrawerTrigger>
            </span>
          </li>
        </ol>
        <DrawerTimer time={stepTime} />
      </Drawer>
    </div>
  );
}
