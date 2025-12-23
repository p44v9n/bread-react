import "./App.css";
import BackButton from "./components/BackButton";
import { useToast } from "@/components/ui/use-toast";
import ToastTimer from "./components/ToastTimer";
import { PlayCircle } from "lucide-react";
import type { RecipeType } from "./RecipeSelect";

// Step images
import step1Image1 from "./assets/images/step1-1.png";
import step1Image2 from "./assets/images/step1-2.png";
import step1Image3 from "./assets/images/step1-3.png";
import step1Image4 from "./assets/images/step1-4.png";
import step1Image5 from "./assets/images/step1-5.png";
import step1Image6 from "./assets/images/step1-6.png";
import step2Image1 from "./assets/images/step2-1.png";
import step2Image2 from "./assets/images/step2-2.png";
import step2Image3 from "./assets/images/step2-3.png";
import step3Image1 from "./assets/images/step3-1.png";
import step3Image2 from "./assets/images/step3-2.png";
import step3Image3 from "./assets/images/step3-3.png";

interface RecipeProps {
  handleBackClick: () => void;
  yeastAmount?: number;
  recipeType?: RecipeType | null;
}

interface Step {
  text: string | React.ReactNode;
  image?: string;
  timer?: number;
  smallText?: string;
}

interface Section {
  title: string;
  subtitle: string;
  steps: Step[];
}

const getRecipeSections = (
  yeastAmount: number,
  recipeType: RecipeType | null | undefined
): Section[] => {
  if (recipeType === "focaccia") {
    return getFocacciaSections(yeastAmount);
  }
  if (recipeType === "rotli") {
    return getRotliSections(yeastAmount);
  }
  return [
    {
      title: "STEP 1",
      subtitle: "Mixing",
      steps: [
        {
          text: `Pour 450ml of water and ${yeastAmount}g of instant yeast in the mixing bowl, whisking together until there are no clumps.`,
          image: step1Image1,
        },
        {
          text: "Add in 750g of bread flour, 12g of salt, and 25ml of olive oil, and mix until all ingredients are combined.",
          image: step1Image2,
          smallText:
            "For a heartier bread, use 500g of strong white bread flour and 250g of wholemeal flour.",
        },
        {
          text: "Turn out onto a clean surface and knead for 10 minutes. Don’t add any extra flour.",
          image: step1Image3,
          timer: 600,
          smallText: "10 minutes is about three pop songs.",
        },
        {
          text: "Let the dough sit for 3 minutes.",
          image: step1Image4,
          timer: 180,
        },
        {
          text: "Shape into a ball, then use a dough scraper to lift back into the mixing bowl.",
          image: step1Image5,
        },
        {
          text: "Add a little dusting of flour to keep the moisture in, then cover with a tea towel and rest for 90 minutes.",
          image: step1Image6,
          timer: 5400,
        },
      ],
    },
    {
      title: "STEP 2",
      subtitle: "The Knock Back",
      steps: [
        {
          text:
            recipeType === "bread-rolls"
              ? "Your dough should have doubled in size. Knock back the air and then divide and shape into rolls."
              : "Your dough should have doubled in size. Knock back the air and then reshape it into a ball.",
          image: step2Image1,
        },
        {
          text: "Oil the Dutch oven or casserole dish, making sure to oil the walls as well as the base, then place the dough inside.",
          image: step2Image2,
        },
        {
          text: "Add a little dusting of flour to keep the moisture in, then cover with a tea towel and rest for another 90 minutes.",
          image: step2Image3,
          timer: 5400,
          smallText:
            "For best results, you could do this second prove overnight in the fridge. 10 minutes before finishing this second prove, preheat the oven to 220ºC.",
        },
      ],
    },
    {
      title: "STEP 3",
      subtitle: "Baking",
      steps: [
        {
          text: "Place the bread dough into a preheated oven, with the lid on, for 15 minutes.",
          image: step3Image1,
          timer: 900,
        },
        {
          text: "Take it out of the oven, remove the lid, then put back in to bake for another 15 minutes.",
          image: step3Image2,
          timer: 900,
          smallText:
            "Keep an eye on it — every oven is different, so you may need longer or shorter.",
        },
        {
          text: "Wait at least half an hour before cutting into it — the inside is still baking and needs to cool down!",
          image: step3Image3,
        },
      ],
    },
  ];
};

const getFocacciaSections = (yeastAmount: number): Section[] => [
  {
    title: "STEP 1",
    subtitle: "Mixing",
    steps: [
      {
        text: `Pour 400ml of water and ${yeastAmount}g of instant yeast in the mixing bowl, whisking together until there are no clumps.`,
        image: step1Image1,
      },
      {
        text: "Add in 500g of bread flour, 10g of salt, and 40ml of olive oil, and mix until all ingredients are combined.",
        image: step1Image2,
      },
      {
        text: "Turn out onto a clean surface and knead for 10 minutes. Don’t add any extra flour.",
        image: step1Image3,
        timer: 480,
        smallText:
          "Wet your hands and use the slap and fold to handle this high hydration dough.",
      },
      {
        text: "Let the dough sit for 3 minutes.",
        image: step1Image4,
        timer: 180,
      },
      {
        text: "Shape into a ball, then use a dough scraper to lift back into the mixing bowl.",
        image: step1Image5,
      },
      {
        text: "Add a little dusting of flour to keep the moisture in, then cover with a tea towel and rest for 60 minutes.",
        image: step1Image6,
        timer: 5400,
      },
    ],
  },
  {
    title: "STEP 2",
    subtitle: "The Dimpling",
    steps: [
      {
        text: "Oil the baking tray, making sure to oil the walls as well as the base, then place the dough inside.",
        image: step2Image2,
      },
      {
        text: "Your dough should have doubled in size. Knock it back and shape into a loose rectangle in the baking tray.",
        image: step2Image1,
      },
      {
        text: "Fill a small bowl with olive oil, dunk your fingers in, and dimple the dough all over the surface.",
        smallText:
          "This is also the time to add toppings: diced rosemary, red onion or halved cherry tomatoes work well.",
      },
      {
        text: "Add a little dusting of flour to keep the moisture in, then cover with a tea towel and rest for another 45 minutes.",
        image: step2Image3,
        timer: 5400,
        smallText:
          "For best results, you could do this second prove overnight in the fridge. 10 minutes before finishing this second prove, preheat the oven to 220ºC.",
      },
    ],
  },
  {
    title: "STEP 3",
    subtitle: "Baking",
    steps: [
      {
        text: "Place the bread dough into a preheated oven for 35-40 minutes.",
        image: step3Image1,
        smallText:
          "Keep an eye on it — every oven is different, so you may need longer or shorter.",
      },
      {
        text: "Eat hot or cold, with plenty of olive oil!!",
        image: step3Image3,
      },
    ],
  },
];

// TODO: Fill in the rotli recipe steps below
const getRotliSections = (_yeastAmount: number): Section[] => [
  {
    title: "STEP 1",
    subtitle: "Mixing",
    steps: [
      {
        text: "Mix 25ml of veg oil into 125g of rotli flour, till it becomes a crumbly texture.",
      },
      {
        text: "Add hot water to the mixture to form a dough. You should use between 60-90ml but it depends on how fresh the flour is and the water temperature.",
      },
      {
        text: "Knead for around 3 minutes, then add a drop of oil and let the dough rest for 10 minutes",
        smallText: "You can skip the rest if needed.",
      },
    ],
  },
  {
    title: "STEP 2",
    subtitle: "Shaping",
    steps: [
      {
        text: "Divide the dough into 8 equal pieces, then shape into balls.",
        smallText:
          "The more round the balls are, the more circular the rotlis   will be.",
      },
      {
        text: "Flatten each ball, dunk in rotli flour, and using plenty of flour on your board, roll out into a thin circle.",
        smallText:
          "The less pressure used here is better, to make sure they don’t become too thick.",
      },
    ],
  },
  {
    title: "STEP 3",
    subtitle: "Cooking",
    steps: [
      {
        text: "Heat your tawa as high as it goes, and add a drop of oil.",
      },
      {
        text: "Add the rotli to the tawa, and cook for 20 seconds on one side before flipping.",
        smallText:
          "The tawa should be hot enough that you only need to flip twice. If rolled evenly they will puff up and can be pressed down.",
      },
      {
        text: "While each rotli cooks, roll out the next one.",
      },
      {
        text: "Add a teaspoon of ghee to each finished rotli. Keep them under a teatowel to keep them soft while cooking the rest.",
      },
    ],
  },
];

const Recipe: React.FC<RecipeProps> = ({
  handleBackClick,
  yeastAmount = 7,
  recipeType,
}) => {
  const toast = useToast();
  const sections = getRecipeSections(yeastAmount, recipeType);

  const getRecipeTitle = () => {
    switch (recipeType) {
      case "bread-rolls":
        return "Bread Rolls";
      case "focaccia":
        return "Focaccia";
      case "rotli":
        return "Rotli";
      default:
        return "Normal Loaf";
    }
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex flex-row w-full items-center justify-between mb-4">
        <BackButton onClick={handleBackClick} />
      </div>

      <div className="flex-1 overflow-y-auto pb-4">
        <h1 className="text-3xl text-twine-950 font-serif mb-6">
          {getRecipeTitle()}
        </h1>

        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-8">
            <div className="sticky top-0 bg-twine-50 py-2 z-10 border-b border-twine-200 mb-4">
              <h3 className="text-sm tracking-wider text-twine-600 font-medium">
                {section.title}
              </h3>
              <h2 className="text-2xl text-twine-900 font-serif">
                {section.subtitle}
              </h2>
            </div>

            <ol className="list-decimal text-left list-outside ml-0">
              {section.steps.map((step, stepIndex) => (
                <li
                  key={stepIndex}
                  className="text-lg text-twine-900 mb-5 ml-6"
                >
                  <span className="mr-1">{step.text}</span>
                  {step.timer && (
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        toast.toast({
                          description: <ToastTimer time={step.timer!} />,
                        });
                      }}
                      className="inline-flex items-center"
                    >
                      <PlayCircle className="inline mb-0.5 ml-1 text-twine-600 hover:text-twine-800 w-5 h-5" />
                    </a>
                  )}
                  {step.smallText && (
                    <span className="text-twine-600 mt-2 block text-base">
                      {step.smallText}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipe;
