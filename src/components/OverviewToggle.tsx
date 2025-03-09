import { CircleDot, ListOrdered } from "lucide-react";
import { Button } from "./ui/button";

interface OverviewToggleProps {
  onClick: () => void;
  showAsList: boolean;
}

export default function OverviewToggle({
  onClick,
  showAsList,
}: OverviewToggleProps): JSX.Element {
  return (
    <div className="w-[124px] h-12 items-center rounded-full flex flex-row gap- bg-[#FFE096] pl-1">
      <Button
        className="rounded-full"
        variant={showAsList ? "default" : "secondary"}
        onClick={onClick}
      >
        <ListOrdered />
      </Button>
      <Button
        className="rounded-full"
        variant={showAsList ? "secondary" : "default"}
        onClick={onClick}
      >
        <CircleDot />
      </Button>
    </div>
  );
}
