import { MoveLeft, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContinueButtonProps {
//   step: number;
  onClick: () => void;
}

const BackButton: React.FC<ContinueButtonProps> = ({ onClick }) => {
  return (
    <>
      <Button
        variant={"secondary"}
        className="px-0 w-fit h-4 mb-6 text-twine-800 items-baseline"
        onClick={onClick}
      >
        <MoveLeft />
      </Button>
    </>
  );
};

export default BackButton;
