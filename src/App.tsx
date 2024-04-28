import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Drawer } from 'vaul'
import { Button } from '@/components/ui/button'
import { ArrowRight } from "lucide-react"

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    {/* <h1 className="text-3xl font-bold text-slate-50 mb-8">A<br />Simple<br />Loaf</h1> */}
    <Drawer.Root shouldScaleBackground>
    <div className="max-w-screen-sm w-screen h-full bg-slate-900 flex justify-around flex-col">
    <div className="mx-20">
    <h3 className="text-xs tracking-wider text-slate-300 -ml-4">STEP 1</h3>
    <h1 className="text-lg text-slate-50 mb-4 -ml-4">Mixing</h1>
    <ol className="list-decimal text-left ml-0">
    <li className="text-base text-slate-200 mb-4">Combine 450ml of water and 7g instant yeast in the mixing bowl, until there are no clumps</li>
    <li className="text-base text-slate-200 mb-4">Add in 750g of bread flour, 12g of salt, and 25ml of olive oil, and mix until all ingredients are combined<br />
    <div className="text-sm leading-5 text-slate-400 list-none mt-2">For a heartier bread, use 500g of strong white bread flour and 250g of wholemeal flour</div></li>
    <li className="text-base text-slate-200 mb-4">Turn out onto a clean surface and knead for <Drawer.Trigger className="bg-slate-900 underline p-0 underline-offset-2	">8 minutes</Drawer.Trigger></li>
    </ol>
    </div>
    </div>
    
    <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="bg-slate-100 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0">
            <div className="p-4 bg-white rounded-t-[10px] flex-1">
              <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-slate-300 mb-8" />
              <div className="max-w-md mx-auto">
                <Drawer.Title className="font-medium mb-4 slate-900">
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
                  className="text-xs text-slate-600 flex items-center gap-0.25"
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
                  className="text-xs text-slate-600 flex items-center gap-0.25"
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


    {/* page2
    <div className="max-w-screen-sm w-screen h-full bg-slate-900 flex justify-around flex-col">
    <div className="mx-20">
    <h1 className="text-xl text-slate-50 mb-4 -ml-4">What you need:</h1>
    <ul className="list-disc text-left ml-0">
    <li className="text-xl text-slate-200">750g bread flour</li>
    <li className="text-l text-slate-400 ml-4 list-none">+ a little extra for dusting</li>
    <li className="text-xl text-slate-200">7g instant yeast</li>
    <li className="text-xl text-slate-200">12g table salt</li>
    <li className="text-xl text-slate-200">480ml water</li>
    <li className="text-xl text-slate-200">25ml olive oil</li>
    <li className="text-l text-slate-400 ml-4 list-none mb-4">+ a splash extra for the tin</li>
    
    <li className="text-xl text-slate-200">A large mixing bowl</li>
    <li className="text-xl text-slate-200">A tea towel</li>
    <li className="text-xl text-slate-200">A clean surface</li>
    <li className="text-l text-slate-400 ml-4 list-none mb-4">for kneading on</li>
    
    <li className="text-xl text-slate-200">An oven</li>
    <li className="text-xl text-slate-200">A large loaf tin</li>
    <li className="text-l text-slate-400 ml-4 list-none mb-4">or similar casserole dish</li>
    
    <li className="text-xl text-slate-200">Dough scrapers</li>
    <li className="text-l text-slate-400 ml-4 list-none mb-4">optional, but very useful!</li>
    </ul>
    </div>
    <div className="mx-10">
    
    <Button variant="default" size="lg" className="w-full" >
    Continue
    </Button>
    </div>
    
    
  */}
  
  {/*
  <Button variant="outline" size="icon" >
  <ArrowRight />
  </Button> 
*/}
{/* <a href="https://vitejs.dev" target="_blank">
<img src={viteLogo} className="logo" alt="Vite logo" />
</a>
<a href="https://react.dev" target="_blank">
<img src={reactLogo} className="logo react" alt="React logo" />
</a>
</div>
<h1>Vite + React</h1>
<div className="card">
<button onClick={() => setCount((count) => count + 1)}>
count is {count}
</button>
<p>
Edit <code>src/App.tsx</code> and save to test HMR
</p>
</div>
<p className="read-the-docs">
Click on the Vite and React logos to learn more
</p> */}
{/* 
</div>
*/}
</>
)
}

export default App
