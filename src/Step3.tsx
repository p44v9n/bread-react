import "./App.css";
import { useState } from "react";
import BackButton from "./components/BackButton";
import OverviewToggle from "./components/OverviewToggle";
import { useToast } from "@/components/ui/use-toast";
import ToastTimer from "./components/ToastTimer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "@/components/ui/carousel";
import { PlayCircle } from "lucide-react";

interface Step3Props {
  handleBackClick: () => void;
}

const steps = [
  {
    text: (
      <>
        Place the bread dough into a preheated oven, with the lid on, for 15
        minutes
      </>
    ),
    image: "./assets/images/step3-1.png",
    timer: 900, // 15 minutes in seconds
  },
  {
    text: (
      <>
        Take it out of the oven, remove the lid, then put back in to bake for
        another 15 minutes.
      </>
    ),
    image: "./assets/images/step3-2.png",
    timer: 900, // 15 minutes in seconds
    smallText:
      "Keep an eye on it — every oven is different, so you may need longer or shorter.",
  },
  {
    text: "Wait at least half an hour before cutting into it — the inside is still baking and needs to cool down!",
    image: "./assets/images/step3-3.png"
  },
];

const Step3: React.FC<Step3Props> = ({ handleBackClick }) => {
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
          STEP 3
        </h3>
        <h1 className="text-3xl text-twine-950 mb-8 font-serif">Baking</h1>

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
                          {step.text}
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

export default Step3;
