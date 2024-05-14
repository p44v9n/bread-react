import "./App.css";
import { useState } from "react";
// @ts-ignore
import { useSound } from "use-sound";
import { Button } from "@/components/ui/button";
import Splash from "./Splash";
import Intro from "./Intro";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import brid from "./assets/bread.svg";
import { MoveLeft, MoveRight, RotateCcw } from "lucide-react";
import tapSound1 from "@/assets/sounds/tap1.wav";
import tapSound2 from "@/assets/sounds/tap2.wav";
import tapSound3 from "@/assets/sounds/tap3.wav";
import tapSound4 from "@/assets/sounds/tap4.m4a";
import tapSound5 from "@/assets/sounds/tap5.m4a";

function App() {
  const [step, setStep] = useState(0); //step, setter, initial state

  function nextClick() {
    setStep((step + 1) % 6); //on click, add 1 to step
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    playTap();
  }

  // Load your sounds using useSound
  const [playSound1] = useSound(tapSound1);
  const [playSound2] = useSound(tapSound2);
  const [playSound3] = useSound(tapSound3);
  const [playSound4] = useSound(tapSound4);
  const [playSound5] = useSound(tapSound5);

  // Array of play functions
  const playFunctions = [
    playSound1,
    playSound2,
    playSound3,
    playSound4,
    playSound5,
  ];

  // Function to play a random tap sound
  const playTap = () => {
    const randomIndex = Math.floor(Math.random() * playFunctions.length);
    playFunctions[randomIndex]();
  };

  const backClick = () => {
    setStep(step - 1);
    playTap();
  };

  const BackButton = (
    <>
    <Button
      variant={"secondary"}
      className="px-0 w-fit h-4 mb-6 text-twine-800"
      onClick={backClick}
    >
      <MoveLeft/>
    </Button>
    </>
  );

  const ContinueButton = (
    <>
      {/* <div className=" w-screen"> */}
      <Button
        variant="default"
        size="lg"
        className="my-8 w-full gap-2 rounded-full"
        onClick={nextClick}
      >
        {step > 4 && <RotateCcw />}
        {step > 4 ? "Reset" : "Continue"}
        {step <= 4 && <MoveRight />}
      </Button>
      {/* </div> */}
    </>
  );

  let content;
  if (step === 0) {
    content = <Splash />;
  } else if (step === 1) {
    content = (
      <>
        <Intro />
      </>
    );
  } else if (step === 2) {
    content = (
      <>
        <Step1 />
      </>
    );
  } else if (step === 3) {
    content = (
      <>
        <Step2 />
      </>
    );
  } else if (step === 4) {
    content = (
      <>
        <Step3 />
      </>
    );
  } else {
    content = (
      <>
        <h1 className="text-center text-5xl font-serif mb-20 text-twine-900">Nom nom!</h1>
        <div className="mx-auto">
          <img src={brid} alt="" width="150" />
        </div>
      </>
    );
  }

  return (
    <div className=" bg-twine-50 max-w-screen-sm w-screen flex flex-col min-h-dvh justify-around align-middle px-8 pt-8 pb-12 h-max">
      <div className="flex flex-col">
        {step > 0 && (
         BackButton
        )}
        {content}
      </div>
      {ContinueButton}
    </div>
  );
}

export default App;
