import "./App.css";
import { Drawer } from "vaul";
import { PlayCircle } from "lucide-react";

export default function Step1() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Drawer.Root shouldScaleBackground>
        <div className="mx-8">
          <h3 className="text-sm tracking-wider text-slate-400 -ml-4 font-medium">
            STEP 1
          </h3>
          <h1 className="text-2xl text-slate-50 mb-8 -ml-4">Mixing</h1>
          <ol className="list-decimal text-left">
            <li className="text-xl text-slate-200 mb-8">
              Combine <strong>450ml</strong> of water and <strong>7g</strong> of instant yeast in the mixing bowl,
              until there are no clumps
            </li>
            <li className="text-xl text-slate-200 mb-8">
              Add in <strong>750g</strong> of bread flour, <strong>12g</strong> of salt, and <strong>25ml</strong> of olive oil,
              and mix until all ingredients are combined
              <br />
              <div className="text-base leading-5 text-slate-400 list-none mt-2">
                For a heartier bread, use <strong>500g</strong> of strong white bread flour and <strong>250g</strong> of wholemeal flour
              </div>
            </li>
            <li className="text-xl text-slate-200 mb-8">
              <span>
                Turn out onto a clean surface and knead for{" "}
                <Drawer.Trigger className="bg-slate-950 underline p-0 underline-offset-2 inline">
                  8 minutes
                  <PlayCircle className="inline ml-1" />
                </Drawer.Trigger>
              </span>
            </li>
            <li className="text-xl text-slate-200 mb-8">
              <span>
                Let the dough sit for{" "}
                <Drawer.Trigger className="bg-slate-950 underline p-0 underline-offset-2 inline">
                  3 minutes
                  <PlayCircle className="inline ml-1" />
                </Drawer.Trigger>
              </span>
            </li>
            <li className="text-xl text-slate-200 mb-8">
            Shape into a ball, then use a dough scraper to lift back into the mixing bowl
            </li>
            <li className="text-xl text-slate-200 mb-8">
              <span>
              Add a little dusting of flour to keep the moisture in, then cover with a tea towel and rest for{" "}
                <Drawer.Trigger className="bg-slate-950 underline p-0 underline-offset-2 inline">
                  90 minutes
                  <PlayCircle className="inline ml-1" />
                </Drawer.Trigger>
              </span>
            </li>
          </ol>
        </div>

        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="bg-slate-100 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0">
            <div className="p-4 bg-white rounded-t-[10px] flex-1">
              <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-slate-300 mb-8" />
              <div className="max-w-md mx-auto">
                <Drawer.Title className="font-medium mb-4 slate-950">
                  Timer
                </Drawer.Title>
                <p className="text-slate-600 mb-2">
                  This component can be used as a replacement for a Dialog on
                  mobile and tablet devices.
                </p>
                <p className="text-slate-600 mb-8">
                  It uses{" "}
                  <a
                    href="https://www.radix-ui.com/docs/primitives/components/dialog"
                    className="underline"
                    target="_blank"
                  >
                    Radix&apos;s Dialog primitive
                  </a>{" "}
                  under the hood and is inspired by{" "}
                  <a
                    href="https://twitter.com/devongovett/status/1674470185783402496"
                    className="underline"
                    target="_blank"
                  >
                    this tweet.
                  </a>
                </p>
              </div>
            </div>
            <div className="p-4 bg-slate-100 border-t border-slate-200 mt-auto">
              <div className="flex gap-6 justify-end max-w-md mx-auto">
                <a
                  className="text-sm text-slate-600 flex items-center gap-0.25"
                  href="https://github.com/emilkowalski/vaul"
                  target="_blank"
                >
                  GitHub
                  <svg
                    fill="none"
                    height="16"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="16"
                    aria-hidden="true"
                    className="w-3 h-3 ml-1"
                  >
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14L21 3"></path>
                  </svg>
                </a>
                <a
                  className="text-sm text-slate-600 flex items-center gap-0.25"
                  href="https://twitter.com/emilkowalski_"
                  target="_blank"
                >
                  Twitter
                  <svg
                    fill="none"
                    height="16"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="16"
                    aria-hidden="true"
                    className="w-3 h-3 ml-1"
                  >
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14L21 3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
}
