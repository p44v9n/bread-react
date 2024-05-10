import "./App.css";
// import { Drawer } from "vaul";
// import { PlayCircle } from "lucide-react";

export default function Intro() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className="text-2xl text-slate-50 mb-4">What you’ll need:</h1>

      <div>
        <div className="flex flex-row gap-2 mb-4 mt-8">
          <h2 className="grow uppercase text-md tracking-wider">Ingredients</h2>
          <hr className="bg-slate-100 h-[0.1rem] w-full my-auto" />
        </div>
        <ul className="list-disc text-left ml-8">
          <li className="text-xl text-slate-200">750g bread flour</li>
          <li className="text-l text-slate-400 ml-8 list-none">
            + a little extra for dusting
          </li>
          <li className="text-xl text-slate-200">7g instant yeast</li>
          <li className="text-xl text-slate-200">12g table salt</li>
          <li className="text-xl text-slate-200">480ml water</li>
          <li className="text-xl text-slate-200">25ml olive oil</li>
          <li className="text-l text-slate-400 ml-8 list-none mb-4">
            + a splash extra for the tin
          </li>
        </ul>
      </div>

      <div>
        <div className="flex flex-row gap-2 mb-4 mt-8">
          <h2 className="grow uppercase text-md tracking-wider">equipment</h2>
          <hr className="bg-slate-100 h-[0.1rem] w-full my-auto" />
        </div>
        <ul className="list-disc text-left ml-8">
          <li className="text-xl text-slate-200">A large mixing bowl</li>
          <li className="text-xl text-slate-200">A tea towel</li>
          <li className="text-xl text-slate-200">A large loaf tin</li>
          <li className="text-l text-slate-400 ml-8 list-none">
            or similar casserole dish
          </li>
          <li className="text-xl text-slate-200">Dough scrapers</li>
          <li className="text-l text-slate-400 ml-8 list-none mb-4">
            optional, but very useful!
          </li>
        </ul>
      </div>

      <div>
        <div className="flex flex-row gap-2 mb-4 mt-8">
          <h2 className="grow uppercase text-md tracking-wider">in&nbsp;ya&nbsp;kitchen</h2>
          <hr className="bg-slate-100 h-[0.1rem] grow-0 w-full my-auto" />
        </div>
        <ul className="list-disc text-left ml-8">
          <li className="text-xl text-slate-200">A clean surface</li>
          <li className="text-l text-slate-400 ml-8 list-none">
            for kneading on
          </li>
          <li className="text-xl text-slate-200">An oven</li>
        </ul>
      </div>
    </div>
  );
}
