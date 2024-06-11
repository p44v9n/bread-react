import "./App.css";
import { useState } from "react";
import BackButton from "./components/BackButton";
import OverviewToggle from "./components/OverviewToggle";
import { useToast } from "@/components/ui/use-toast";
import ToastTimer from "./components/ToastTimer";
import image1 from "./assets/images/step1-1";
import image2 from "./assets/images/step1-2";
import image3 from "./assets/images/step1-3";
import image4 from "./assets/images/step1-4";
import image5 from "./assets/images/step1-5";
import image6 from "./assets/images/step1-6.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "@/components/ui/carousel";
import { PlayCircle } from "lucide-react";

interface Step1Props {
  handleBackClick: () => void;
}

const steps = [
  {
    text: "Combine 450ml of water and 7g of instant yeast in the mixing bowl, until there are no clumps.",
    image: {image1},
  },
  {
    text: "Add in 750g of bread flour, 12g of salt, and 25ml of olive oil, and mix until all ingredients are combined.",
    image: {image2},
    smallText:
      "For a heartier bread, use 500g of strong white bread flour and 250g of wholemeal flour.",
  },
  {
    text: "Turn out onto a clean surface and knead for 8 minutes.",
    image: {image3},
    timer: 480, // 8 minutes in seconds
  },
  {
    text: "Let the dough sit for 3 minutes.",
    image: {image4},
    timer: 180, // 3 minutes in seconds
  },
  {
    text: "Shape into a ball, then use a dough scraper to lift back into the mixing bowl.",
    image: {image5},
  },
  {
    text: "Add a little dusting of flour to keep the moisture in, then cover with a tea towel and rest for 90 minutes.",
    image: {image6},
    timer: 5400, // 90 minutes in seconds
  },
];

const Step1: React.FC<Step1Props> = ({ handleBackClick }) => {
  const [showAsList, setShowAsList] = useState(false);
  const toast = useToast();

  return (
    <>
      <div className="flex flex-row w-full items-center justify-between">
        <BackButton onClick={handleBackClick} />
        <OverviewToggle
          showAsList={showAsList}
          onClick={() => setShowAsList(!showAsList)}
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-sm tracking-wider text-twine-900 font-medium">
          STEP 1
        </h3>
        <h1 className="text-3xl text-twine-950 mb-8 font-serif">Mixing</h1>

        {showAsList && (
          <ol className="list-decimal text-left ml-6">
            {steps.map((step, index) => (
              <li key={index} className="text-xl text-twine-900 mb-8">
                <span className="mr-1">{step.text}</span>
                {step.timer && (
                  <a
                    href="#"
                    onClick={() => {
                      toast.toast({
                        description: <ToastTimer time={step.timer} />,
                      });
                    }}
                    className="text-blue-500 underline"
                  >
                    <PlayCircle className="inline mb-1 text-twine-600 hover:text-twine-800" />
                  </a>
                )}
                {step.smallText && (
                  <>
                    <span className="text-twine-700 mr-1 mt-2 block text-base">
                      {step.smallText}
                    </span>
                  </>
                )}
              </li>
            ))}
          </ol>
        )}

        {!showAsList && (
          <Carousel>
            <CarouselContent className="mx-2 -ml-4">
              {steps.map((step, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full bg-twine-50 p-8 ml-4 text-center"
                >
                  <img
                    src={step.image}
                    alt={`Step ${index + 1}`}
                    className="mx-auto"
                    width="150"
                  />
                  <p className="mt-8 text-2xl px-4 leading-relaxed text-center text-twine-900">
                    <span className="mr-2">{step.text}</span>
                    {step.timer && (
                      <a
                        href="#"
                        onClick={() => {
                          toast.toast({
                            description: <ToastTimer time={step.timer} />,
                          });
                        }}
                        className="text-blue-500 underline"
                      >
                        <PlayCircle className="inline mb-1 text-twine-600 hover:text-twine-800" />
                      </a>
                    )}
                    {step.smallText && (
                      <>
                        <span className="text-twine-700 mr-1 mt-2 block text-base">
                          {step.smallText}
                        </span>
                      </>
                    )}
                  </p>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselDots />
          </Carousel>
        )}
      </div>
    </>
  );
};

export default Step1;
