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
  type CarouselApi,
} from "@/components/ui/carousel";
import { PlayCircle } from "lucide-react";
import image1 from "./assets/images/step2-1.png";
import image2 from "./assets/images/step2-2.png";
import image3 from "./assets/images/step2-3.png";

interface Step2Props {
  handleBackClick: () => void;
  onCarouselChange?: (api: CarouselApi) => void;
  showAsList?: boolean;
  onToggleView?: (isListView: boolean) => void;
}

const steps = [
  {
    text: "Your dough should have doubled in size. Knock back the air and then reshape it into a ball.",
    image: image1,
  },
  {
    text: "Oil the Dutch oven or casserole dish, making sure to oil the walls as well as the base, then place the dough inside.",
    image: image2,
  },
  {
    text: "Add a little dusting of flour to keep the moisture in, then cover with a tea towel and rest for another 90 minutes.",
    image: image3,
    timer: 5400, // 90 minutes in seconds
    smallText:
      "10 minutes before finishing this second prove, preheat the oven to 220ºC.",
  },
];

const Step2: React.FC<Step2Props> = ({
  handleBackClick,
  onCarouselChange,
  showAsList = true,
  onToggleView,
}) => {
  // Use local state only if props are not provided
  const [localShowAsList, setLocalShowAsList] = useState(true);
  const toast = useToast();

  // Use props if provided, otherwise use local state
  const isListView = showAsList !== undefined ? showAsList : localShowAsList;

  const handleToggleView = () => {
    if (onToggleView) {
      onToggleView(!isListView);
    } else {
      setLocalShowAsList(!localShowAsList);
    }
  };

  return (
    <>
      <div className="flex flex-col h-full">
        <div className="flex flex-row w-full items-center justify-between">
          <BackButton onClick={handleBackClick} />
          <OverviewToggle showAsList={isListView} onClick={handleToggleView} />
        </div>
        <div className="flex flex-col h-full">
          <h3 className="text-sm tracking-wider text-twine-900 font-medium">
            STEP 2
          </h3>
          <h1 className="text-3xl text-twine-950 mb-4 font-serif">
            The Knock Back
          </h1>

          {isListView && (
            <ol className="list-decimal text-left overflow-y-auto flex-1 list-outside ml-0">
              {steps.map((step, index) => (
                <li key={index} className="text-xl text-twine-900 mb-6 ml-6">
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

          {!isListView && (
            <div className="flex-1 flex flex-col">
              <Carousel setApi={onCarouselChange} className="flex-1">
                <CarouselContent className="h-full">
                  {steps.map((step, index) => (
                    <CarouselItem
                      key={index}
                      className="basis-full bg-twine-50 px-8 ml-4 text-center text-balance flex flex-col justify-center"
                    >
                      <div className="h-32 w-32 flex items-center justify-center mx-auto mb-4 relative">
                        <img
                          src={step.image}
                          alt={`Step ${index + 1}`}
                          className="max-h-full max-w-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <p className="text-xl leading-relaxed text-center text-balance text-twine-900">
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
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Step2;
