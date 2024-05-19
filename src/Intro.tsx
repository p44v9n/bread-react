import "./App.css";
import BackButton from "./components/BackButton";
// import { Drawer } from "vaul";
// import { PlayCircle } from "lucide-react";

interface IntroProps {
  handleBackClick: () => void;
}

const Intro: React.FC<IntroProps> = ({ handleBackClick }) => {
  // const [count, setCount] = useState(0)

  return (
    <div>
        <div className="flex flex-row w-full items-center">
        <BackButton onClick={handleBackClick} />
      </div>
      <h1 className="text-3xl text-twine-950 font-serif mb-4">What you’ll need:</h1>

      <div>
        <div className="flex flex-row gap-2 mb-4 mt-8">
          <h2 className="text-twine-900 grow uppercase text-md tracking-wider">Ingredients</h2>
          <hr className="bg-twine-600 text-twine-600 h-[0.1rem] w-full my-auto" />
        </div>
        <ul className="list-disc text-left ml-8">
          <li className="text-xl text-twine-900">750g bread flour</li>
          <li className="text-l text-twine-600 -mt-1 list-none">
            + a little extra for dusting
          </li>
          <li className="text-xl text-twine-900">7g instant yeast</li>
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
          <h2 className="text-twine-900 grow uppercase text-md tracking-wider">equipment</h2>
          <hr className="bg-twine-600 text-twine-600 h-[0.1rem] w-full my-auto" />
        </div>
        <ul className="list-disc text-left ml-8">
          <li className="text-xl text-twine-900">A large mixing bowl</li>
          <li className="text-xl text-twine-900">A tea towel</li>
          <li className="text-xl text-twine-900">A large loaf tin</li>
          <li className="text-l text-twine-600 -mt-1 list-none">
            or similar casserole dish
          </li>
          <li className="text-xl text-twine-900">Dough scrapers</li>
          <li className="text-l text-twine-600 -mt-1 list-none mb-4">
            optional, but very useful!
          </li>
        </ul>
      </div>

      <div>
        <div className="flex flex-row gap-2 mb-4 mt-8">
          <h2 className="text-twine-900 grow uppercase text-md tracking-wider">in&nbsp;ya&nbsp;kitchen</h2>
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
  );
  
  };
  
  export default Intro;