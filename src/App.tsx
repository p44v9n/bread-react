// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import brid from './assets/bread.svg'
import './App.css'
import { MouseEventHandler, useState } from "react";
// import { Drawer } from 'vaul'
import { Button } from '@/components/ui/button'
import Step1 from './Step1' 
import Intro from './Intro' 

const currentStep = 0;

function App(props: { setStep: MouseEventHandler<HTMLButtonElement> | undefined; }) {
  const [step, setStep] = useState(0); //step, setter, initial state
  
  function click() {
    setStep(step + 1); //on click, add 1 to step
  }
  
  let button = (<>
    <div className="w-full">
      <Button variant="default" size="lg" className="w-full" onClick={click}>
        Continue
      </Button>
    </div>
  </>)

  let content;
  if (step === 1) {
    content = (
      <>
        <Intro />
       
      </>
    );
  } else if (step === 2) {
    content = (
      <>
        <Step1 />
       
      </>
    );
  } else {
    content = (
      <>
      <h1 className="text-center text-3xl leading-[100px]">A<br/>Simple<br/>Loaf<br/></h1>
      <div className="mx-auto">
        <img src={brid} alt="" width="150"/>
      </div>
      </>
    )
  }

  return (
    <div className="max-w-screen-sm w-screen h-full bg-slate-950 flex flex-col justify-between align-middle mx-20 px-20 py-20">
      {content}
      {button}
    </div>
  );
}

export default App