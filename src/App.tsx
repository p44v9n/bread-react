import "./App.css";
import { useState } from "react";
import Splash from "./Splash";
import RecipeSelect, { type RecipeType } from "./RecipeSelect";
import TemperatureSelect, { type Temperature } from "./TemperatureSelect";
import Intro from "./Intro";
import Recipe from "./Recipe";
import ContinueButton from "./components/ContinueButton";
import { playTapSound } from "./lib/tapSound";

function App() {
  const [step, setStep] = useState(0);
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeType | null>(null);
  const [temperature, setTemperature] = useState<Temperature | null>(null);

  // Calculate yeast amount based on temperature and recipe
  const getYeastAmount = () => {
    if (selectedRecipe === "focaccia") {
      return temperature === "cold" ? 12 : 10;
    }
    return temperature === "cold" ? 10 : 7;
  };
  const yeastAmount = getYeastAmount();

  function nextClick() {
    setStep(step + 1);
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    playTapSound();
  }

  const handleRecipeSelect = (recipe: RecipeType) => {
    setSelectedRecipe(recipe);
    setStep(2); // Move to temperature select after choosing recipe
    playTapSound();
  };

  const handleTemperatureSelect = (temp: Temperature) => {
    setTemperature(temp);
    setStep(3); // Move to Intro after selecting temperature
    playTapSound();
  };

  const backClick = () => {
    setStep(step - 1);
    playTapSound();
  };

  let content;
  if (step === 0) {
    content = <Splash />;
  } else if (step === 1) {
    content = <RecipeSelect onSelect={handleRecipeSelect} />;
  } else if (step === 2) {
    content = (
      <TemperatureSelect
        handleBackClick={backClick}
        onSelect={handleTemperatureSelect}
      />
    );
  } else if (step === 3) {
    content = <Intro handleBackClick={backClick} yeastAmount={yeastAmount} />;
  } else {
    // step === 4: Recipe page (final step)
    content = (
      <Recipe
        handleBackClick={backClick}
        yeastAmount={yeastAmount}
        recipeType={selectedRecipe}
      />
    );
  }

  // Only show continue button on splash and intro screens (steps 0 and 3)
  const showContinueButton = step === 0 || step === 3;

  return (
    <div className="bg-twine-50 max-w-screen-sm w-screen flex flex-col h-[100dvh] justify-between overflow-hidden fixed inset-0 px-8 pt-8">
      <div className="flex-1 overflow-hidden">{content}</div>
      {showContinueButton && <ContinueButton step={step} onClick={nextClick} />}
    </div>
  );
}

export default App;
