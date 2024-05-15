import "./App.css";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import { PlayCircle } from "lucide-react";
import DrawerTimer from "@/components/DrawerTimer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots
} from "@/components/ui/carousel";
import { useState } from "react";
import brid from "@/assets/bread.svg";

const Step1Carousel = () => {
  const [stepTime, setStepTime] = useState<number>(0);

  return (
    <div>
      <Drawer>
        <h3 className="text-sm tracking-wider text-twine-900 font-medium">
          STEP 1
        </h3>
        <h1 className="text-3xl text-twine-950 mb-8 font-serif">Mixing</h1>
        <Carousel>
          <CarouselContent className="mx-2 -ml-4">
            <CarouselItem className="basis-full bg-twine-50 p-8 ml-4 text-center ">
              <img src={brid} alt="" className="mx-auto" width="150" />
              <p className="mt-8 text-2xl px-4 leading-relaxed text-center text-twine-900">
                Combine <strong>450ml</strong> of water and <strong>7g</strong>{" "}
                of instant yeast in the mixing bowl, until there are no clumps
              </p>
            </CarouselItem>
            <CarouselItem className="basis-full bg-twine-50 p-8 ml-4 text-center ">
              <img src={brid} alt="" className="mx-auto" width="150" />
              <p className="mt-8 text-2xl px-4 leading-relaxed text-center text-twine-900">
                Add in <strong>750g</strong> of bread flour,{" "}
                <strong>12g</strong> of salt, and <strong>25ml</strong> of olive
                oil, and mix until all ingredients are combined
                <br />
                {/* <span className="">
              For a heartier bread, use <strong>500g</strong> of strong white
              bread flour and <strong>250g</strong> of wholemeal flour
            </span> */}
              </p>
            </CarouselItem>
            <CarouselItem className="basis-full bg-twine-50 p-8 ml-4 text-center ">
              <img src={brid} alt="" className="mx-auto" width="150" />
              <p className="mt-8 text-2xl px-4 leading-relaxed text-center text-twine-900">
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
              </p>
            </CarouselItem>
            <CarouselItem className="basis-full bg-twine-50 p-8 ml-4 text-center ">
              <img src={brid} alt="" className="mx-auto" width="150" />
              <p className="mt-8 text-2xl px-4 leading-relaxed text-center text-twine-900">
                <span>
                  Let the dough sit for 3 minutes
                  <DrawerTrigger
                    className="bg-twine-100 underline p-[4px] underline-offset-2 inline"
                    onClick={() => setStepTime(180)}
                  >
                    3 minutes
                    <PlayCircle className="inline ml-1" />
                  </DrawerTrigger>
                </span>
              </p>
            </CarouselItem>
            <CarouselItem className="basis-full bg-twine-50 p-8 ml-4 text-center ">
              <img src={brid} alt="" className="mx-auto" width="150" />
              <p className="mt-8 text-2xl px-4 leading-relaxed text-center text-twine-900">
                Shape into a ball, then use a dough scraper to lift back into
                the mixing bowl
              </p>
            </CarouselItem>
            <CarouselItem className="basis-full bg-twine-50 p-8 ml-4 text-center ">
              <img src={brid} alt="" className="mx-auto" width="150" />
              <p className="mt-8 text-2xl px-4 leading-relaxed text-center text-twine-900">
                  Add a little dusting of flour to keep the moisture in, then
                  cover with a tea towel and rest for 90 minutes
              </p>
            </CarouselItem>
          </CarouselContent>
          <CarouselDots />
        </Carousel>
        <DrawerTimer time={stepTime} />
      </Drawer>
    </div>
  );
}

export default Step1Carousel;