import "./App.css";
import BackButton from "./components/BackButton";
import { useState, useEffect, useRef } from "react";
// import { Drawer } from "vaul";
// import { PlayCircle } from "lucide-react";

interface IntroProps {
  handleBackClick: () => void;
  yeastAmount?: number;
}

const Intro: React.FC<IntroProps> = ({ handleBackClick, yeastAmount = 7 }) => {
  const [showFader, setShowFader] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Check if content is scrollable
  useEffect(() => {
    const checkScrollable = () => {
      if (contentRef.current) {
        const isScrollable =
          contentRef.current.scrollHeight > contentRef.current.clientHeight;
        setShowFader(isScrollable);
      }
    };

    checkScrollable();
    window.addEventListener("resize", checkScrollable);

    return () => {
      window.removeEventListener("resize", checkScrollable);
    };
  }, []);

  // Update fader visibility on scroll
  const handleScroll = () => {
    if (contentRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 20;

      if (isAtBottom) {
        setShowFader(false);
      } else if (scrollHeight > clientHeight) {
        setShowFader(true);
      }
    }
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex flex-row w-full items-center">
        <BackButton onClick={handleBackClick} />
      </div>
      <div className="flex-1 overflow-y-auto pb-4 relative">
        <div
          ref={contentRef}
          className="h-full overflow-y-auto pb-8"
          onScroll={handleScroll}
        >
          <h1 className="text-3xl text-twine-950 font-serif mb-4">
            What you'll need:
          </h1>

          <div>
            <div className="flex flex-row gap-2 mb-4 mt-8">
              <h2 className="text-twine-900 grow uppercase text-md tracking-wider">
                Ingredients
              </h2>
              <hr className="bg-twine-600 text-twine-600 h-[0.1rem] w-full my-auto" />
            </div>
            <ul className="list-disc text-left ml-8">
              <li className="text-xl text-twine-900">750g bread flour</li>
              <li className="text-l text-twine-600 -mt-1 list-none">
                + a little extra for dusting
              </li>
              <li className="text-xl text-twine-900">{yeastAmount}g instant yeast</li>
              <li className="text-xl text-twine-900">12g table salt</li>
              <li className="text-xl text-twine-900">480ml water</li>
              <li className="text-xl text-twine-900">25ml olive oil</li>
              <li className="text-l text-twine-600 -mt-1 list-none mb-4">
                + a splash extra for the tin
              </li>
            </ul>
          </div>

          <div>
            <div className="flex flex-row gap-2 mb-4 mt-8">
              <h2 className="text-twine-900 grow uppercase text-md tracking-wider">
                equipment
              </h2>
              <hr className="bg-twine-600 text-twine-600 h-[0.1rem] w-full my-auto" />
            </div>
            <ul className="list-disc text-left ml-8">
              <li className="text-xl text-twine-900">A large mixing bowl</li>

              <li className="text-xl text-twine-900">A tea towel</li>
              <li className="text-xl text-twine-900">A large loaf tin</li>
              <li className="text-l text-twine-600 -mt-1 list-none">
                or similar casserole dish
              </li>
            </ul>
          </div>
          <div>
            <div className="flex flex-row gap-2 mb-4 mt-8">
              <h2 className="text-twine-900 grow uppercase text-md tracking-wider">
                nice&nbsp;to&nbsp;have
              </h2>
              <hr className="bg-twine-600 text-twine-600 h-[0.1rem] w-full my-auto" />
            </div>
            <ul className="list-disc text-left ml-8">
              <li className="text-xl text-twine-900">A small whisk</li>
              <li className="text-xl text-twine-900">Dough scrapers</li>
            </ul>
          </div>
          <div>
            <div className="flex flex-row gap-2 mb-4 mt-8">
              <h2 className="text-twine-900 grow uppercase text-md tracking-wider">
                in&nbsp;ya&nbsp;kitchen
              </h2>
              <hr className="bg-twine-600 text-twine-600 h-[0.1rem] grow-0 w-full my-auto" />
            </div>
            <ul className="list-disc text-left ml-8">
              <li className="text-xl text-twine-900">A clean surface</li>
              <li className="text-l text-twine-600 -mt-1 list-none">
                for kneading on
              </li>
              <li className="text-xl text-twine-900">An oven</li>
            </ul>
          </div>
        </div>

        {/* Gradient fader */}
        {showFader && (
          <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none bg-gradient-to-t from-twine-50 to-transparent" />
        )}
      </div>
    </div>
  );
};

export default Intro;
