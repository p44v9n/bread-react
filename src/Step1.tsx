import "./App.css";
import { useState } from "react";
import BackButton from "./components/BackButton";
import OverviewToggle from "./components/OverviewToggle";
import { useToast } from "@/components/ui/use-toast";
import ToastTimer from "./components/ToastTimer";
import image1 from "./assets/images/step1-1.png";
import image2 from "./assets/images/step1-2.png";
import image3 from "./assets/images/step1-3.png";
import image4 from "./assets/images/step1-4.png";
import image5 from "./assets/images/step1-5.png";
import image6 from "./assets/images/step1-6.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
  type CarouselApi,
} from "@/components/ui/carousel";
import { PlayCircle } from "lucide-react";

interface Step1Props {
  handleBackClick: () => void;
  onCarouselChange?: (api: CarouselApi) => void;
  showAsList?: boolean;
  onToggleView?: (isListView: boolean) => void;
}

const steps = [
  {
    text: "Pour 450ml of water and 7g of instant yeast in the mixing bowl, whisking togetheruntil there are no clumps.",
    image: image1,
  },
  {
    text: "Add in 750g of bread flour, 12g of salt, and 25ml of olive oil, and mix until all ingredients are combined.",
    image: image2,
    smallText:
      "For a heartier bread, use 500g of strong white bread flour and 250g of wholemeal flour.",
  },
  {
    text: "Turn out onto a clean surface and knead for 8 minutes.",
    image: image3,
    timer: 480, // 8 minutes in seconds
  },
  {
    text: "Let the dough sit for 3 minutes.",
    image: image4,
    timer: 180, // 3 minutes in seconds
  },
  {
    text: "Shape into a ball, then use a dough scraper to lift back into the mixing bowl.",
    image: image5,
  },
  {
    text: "Add a little dusting of flour to keep the moisture in, then cover with a tea towel and rest for 90 minutes.",
    image: image6,
    timer: 5400, // 90 minutes in seconds
  },
];

const Step1: React.FC<Step1Props> = ({
  handleBackClick,
  onCarouselChange,
  showAsList = false,
  onToggleView,
}) => {
  // Use local state only if props are not provided
  const [localShowAsList, setLocalShowAsList] = useState(false);
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
      <div className="flex flex-col h-full overflow-hidden">
        <div className="flex flex-row w-full items-center justify-between">
          <BackButton onClick={handleBackClick} />
          <OverviewToggle showAsList={isListView} onClick={handleToggleView} />
        </div>
        <div className="flex flex-col h-full overflow-hidden">
          <h3 className="text-sm tracking-wider text-twine-900 font-medium">
            STEP 1
          </h3>
          <h1 className="text-3xl text-twine-950 mb-4 font-serif">Mixing</h1>

          {isListView && (
            <ol className="list-decimal text-left overflow-y-auto flex-1 list-outside ml-0">
              {steps.map((step, index) => (
                <li key={index} className="text-xl text-twine-900 mb-6 ml-6">
                  <span className="mr-1">{step.text}</span>
                  {step.timer && (
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
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
            <div className="flex-1 flex flex-col overflow-hidden">
              <Carousel setApi={onCarouselChange} className="flex-1">
                <CarouselContent className="h-full">
                  {steps.map((step, index) => (
                    <CarouselItem
                      key={index}
                      className="basis-full px-8 ml-4 text-center text-balance flex flex-col justify-center"
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
                            onClick={(e) => {
                              e.preventDefault();
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

export default Step1;
