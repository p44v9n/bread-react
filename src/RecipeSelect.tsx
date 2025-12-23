import "./App.css";
import { Croissant, Cookie, Wheat, Circle } from "lucide-react";

export type RecipeType = "normal-loaf" | "bread-rolls" | "focaccia" | "rotli";

interface RecipeSelectProps {
  onSelect: (recipe: RecipeType) => void;
}

const recipeOptions: {
  value: RecipeType;
  label: string;
  icon: React.ReactNode;
  enabled: boolean;
}[] = [
  {
    value: "normal-loaf",
    label: "Normal Loaf",
    icon: <Wheat className="w-8 h-8" />,
    enabled: true,
  },
  {
    value: "bread-rolls",
    label: "Bread Rolls",
    icon: <Cookie className="w-8 h-8" />,
    enabled: true,
  },
  {
    value: "focaccia",
    label: "Focaccia",
    icon: <Croissant className="w-8 h-8" />,
    enabled: true,
  },
  {
    value: "rotli",
    label: "Rotli",
    icon: <Circle className="w-8 h-8" />,
    enabled: false,
  },
];

const RecipeSelect: React.FC<RecipeSelectProps> = ({ onSelect }) => {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex-1 flex flex-col justify-center pb-16">
        <h1 className="text-3xl text-twine-950 font-serif mb-2 text-center">
          What are we making?
        </h1>
        <p className="text-twine-700 text-center mb-8">
          Choose your recipe to get started.
        </p>

        <div className="flex flex-col gap-4">
          {recipeOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => option.enabled && onSelect(option.value)}
              disabled={!option.enabled}
              className={`flex items-center gap-4 p-5 rounded-2xl transition-colors border-2 ${
                option.enabled
                  ? "bg-twine-100 hover:bg-twine-200 active:bg-twine-300 border-transparent hover:border-twine-300 cursor-pointer"
                  : "bg-twine-50 border-twine-200 cursor-not-allowed opacity-50"
              }`}
            >
              <div
                className={option.enabled ? "text-twine-700" : "text-twine-400"}
              >
                {option.icon}
              </div>
              <div className="text-left flex-1">
                <div
                  className={`text-xl font-medium ${option.enabled ? "text-twine-900" : "text-twine-500"}`}
                >
                  {option.label}
                </div>
              </div>
              {!option.enabled && (
                <div className="text-xs text-twine-400 uppercase tracking-wider font-medium">
                  Coming soon
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeSelect;
