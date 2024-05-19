import "./App.css";
import { useState } from "react";
import BackButton from "./components/BackButton";
import OverviewToggle from "./components/OverviewToggle";
import { useToast } from "@/components/ui/use-toast"
import ToastTimer from "./components/ToastTimer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "@/components/ui/carousel";
import { PlayCircle } from "lucide-react";

interface Step2Props {
  handleBackClick: () => void;
}

const steps = [
  {
    text: "Your dough should have doubled in size. Knock back the air and then reshape it into a ball.",
    image: "path/to/image1.jpg",
  },
  {
    text: " Oil the Dutch oven or casserole dish, making sure to oil the walls as well as the base, then place the dough inside.",
    image: "path/to/image2.jpg",
  },
  {
    text: "Oil the Dutch oven or casserole dish, making sure to oil the walls as well as the base, then place the dough inside.",
    image: "path/to/image3.jpg",
  },
  {
    text: " Add a little dusting of flour to keep the moisture in, then cover with a tea towel and rest for another 90 minutes. 10 minutes before finishing this second prove, preheat the oven to 220ºC.",
    image: "path/to/image4.jpg",
    timer: 5400, // 90 minutes in seconds
  }
];

const Step2: React.FC<Step2Props> = ({ handleBackClick }) => {
  const [showAsList, setShowAsList] = useState(true);
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
          STEP 2
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
                        description: <ToastTimer time={step.timer}/>
                      });
                    }}
                    className="text-blue-500 underline"
                  >
                    <PlayCircle className="inline mb-1 text-twine-600 hover:text-twine-800" />
                  </a>
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
                            description: <ToastTimer time={step.timer} />
                          });
                        }}
                        className="text-blue-500 underline"
                      >
                        <PlayCircle className="inline mb-1 text-twine-600 hover:text-twine-800" />
                      </a>
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

export default Step2;