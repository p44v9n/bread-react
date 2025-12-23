import { MoveLeft } from "lucide-react";
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
        className="px-0 w-fit h-4 mb-6 text-twine-800 items-baseline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-twine-800 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        onClick={onClick}
      >
        <MoveLeft />
      </Button>
    </>
  );
};

export default BackButton;
