// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { MouseEventHandler, useState } from "react";
// import { Drawer } from 'vaul'
import { Button } from '@/components/ui/button'
import Step1 from './Step1' 
import Intro from './Intro' 

const currentStep = 0;

function App(props: { setStep: MouseEventHandler<HTMLButtonElement> | undefined; }) {
  const [step, setStep] = useState(true); //step, setter, initial state
  
  function click() {
    setStep(false); //on click, add 1 to step
  }
  
  return (
    <div className="max-w-screen-sm w-screen h-full bg-slate-900 flex justify-around flex-col mx-20 px-20">
      {step ? (
        <>
          <Intro />
          <div className="mx-4">
            <Button variant="default" size="lg" className="w-full" onClick={click}>
              Continue
            </Button>
          </div>
        </>
      ) : (
        <>
        <Step1 />
        <div className="mx-4">
            <Button variant="default" size="lg" className="w-full" onClick={click}>
              Continue
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default App