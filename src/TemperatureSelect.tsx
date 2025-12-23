import "./App.css";
import BackButton from "./components/BackButton";
import { Snowflake, Thermometer } from "lucide-react";

export type Temperature = "cold" | "normal" | "warm";

interface TemperatureSelectProps {
  handleBackClick: () => void;
  onSelect: (temp: Temperature) => void;
}

const temperatureOptions: {
  value: Temperature;
  label: string;
  icon: React.ReactNode;
  description: string;
}[] = [
  {
    value: "cold",
    label: "Cold",
    icon: <Snowflake className="w-8 h-8" />,
    description: "Below 18°C",
  },
  {
    value: "normal",
    label: "Normal",
    icon: <Thermometer className="w-8 h-8" />,
    description: "Above 18°C",
  },
];

const TemperatureSelect: React.FC<TemperatureSelectProps> = ({
  handleBackClick,
  onSelect,
}) => {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex flex-row w-full items-center">
        <BackButton onClick={handleBackClick} />
      </div>
      <div className="flex-1 flex flex-col justify-center pb-16">
        <h1 className="text-3xl text-twine-950 font-serif mb-2 text-center">
          What’s the ambient temperature?
        </h1>
        <p className="text-twine-700 text-center mb-8">
          This adjusts the amount of yeast needed.
        </p>

        <div className="flex flex-col gap-4">
          {temperatureOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => onSelect(option.value)}
              className="flex items-center gap-4 p-5 rounded-2xl bg-twine-100 hover:bg-twine-200 active:bg-twine-300 transition-colors border-2 border-transparent hover:border-twine-300"
            >
              <div className="text-twine-700">{option.icon}</div>
              <div className="text-left">
                <div className="text-xl text-twine-900 font-medium">
                  {option.label}
                </div>
                <div className="text-sm text-twine-600">
                  {option.description}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemperatureSelect;
