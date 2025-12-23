import { MoveRight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContinueButtonProps {
  step: number;
  onClick: () => void;
}

const ContinueButton: React.FC<ContinueButtonProps> = ({ step, onClick }) => {
  // Hide button on recipe selection (step 1) and temperature selection (step 2) since user selects an option
  if (step === 1 || step === 2) {
    return <div className="my-8 h-12" />; // Placeholder to maintain layout
  }

  return (
    <>
      {/* <div className=" w-screen"> */}
      <Button
        variant="default"
        size="lg"
        className="my-8 w-full gap-2 rounded-full"
        onClick={onClick}
      >
        {step > 4 && <RotateCcw />}
        {step > 4 ? "Reset" : "Continue"}
        {step <= 4 && <MoveRight />}
      </Button>
      {/* </div> */}
    </>
  );
};

export default ContinueButton;
