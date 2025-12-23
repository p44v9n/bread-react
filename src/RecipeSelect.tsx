import "./App.css";

export type RecipeType = "normal-loaf" | "bread-rolls" | "focaccia" | "rotli";

interface RecipeSelectProps {
  onSelect: (recipe: RecipeType) => void;
}

const recipeOptions: {
  value: RecipeType;
  label: string;
  enabled: boolean;
}[] = [
  {
    value: "normal-loaf",
    label: "Normal Loaf",
    enabled: true,
  },
  {
    value: "bread-rolls",
    label: "Bread Rolls",
    enabled: true,
  },
  {
    value: "focaccia",
    label: "Focaccia",
    enabled: true,
  },
  {
    value: "rotli",
    label: "Rotli",
    enabled: true,
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

        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {recipeOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => option.enabled && onSelect(option.value)}
              disabled={!option.enabled}
              className={`flex items-center justify-center gap-4 p-5 rounded-2xl transition-colors border-2 h-[120px] ${
                option.enabled
                  ? "bg-twine-100 hover:bg-twine-200 active:bg-twine-300 border-transparent hover:border-twine-300 cursor-pointer"
                  : "bg-twine-50 border-twine-200 cursor-not-allowed opacity-50"
              }`}
            >
              <div className="text-center flex-1">
                <div
                  className={`text-xl font-medium text-center ${option.enabled ? "text-twine-900" : "text-twine-500"}`}
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
