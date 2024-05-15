import "./App.css";
// import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
// import { PlayCircle } from "lucide-react";
// import DrawerTimer from "@/components/DrawerTimer";
import { useState } from "react";
import Step1List from "./Step1List";
import Step1Carousel from "./Step1Carousel";
import BackButton from "./components/BackButton";
import OverviewToggle from "./components/OverviewToggle";

interface Step1Props {
  handleBackClick: () => void;
}

const Step1: React.FC<Step1Props> = ({ handleBackClick }) => {
  const [showAsList, setShowAsList] = useState(true);

  return (
    <>
      <div className="flex flex-row w-full items-center justify-between">
        <BackButton onClick={handleBackClick} />
        <OverviewToggle
          showAsList={showAsList}
          onClick={() => setShowAsList(!showAsList)}
        />
      </div>
      <div className="flex flex-col">
        {showAsList ? <Step1List /> : <Step1Carousel />}
      </div>
    </>
  );
};

export default Step1;
