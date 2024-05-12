// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import brid from './assets/bread.svg'
import './App.css'
import { useState } from "react";
// import { Drawer } from 'vaul'
import { Button } from '@/components/ui/button'
import Step1 from './Step1' 
import Intro from './Intro' 

// const currentStep = 0;

function App() {
  const [step, setStep] = useState(0); //step, setter, initial state
  
  function click() {
    setStep(step + 1); //on click, add 1 to step
    document.body.scrollTop = document.documentElement.scrollTop = 0;

  }
  
  let button = (<>
    {/* <div className=" w-screen"> */}
      <Button variant="default" size="lg" className="my-8 w-full" onClick={click}>
        Continue
      </Button>
    {/* </div> */}
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
    // <div className=" ">
    <div className=" bg-slate-950 max-w-screen-sm w-screen flex flex-col min-h-dvh justify-between align-middle px-8 pt-14 pb-12">
      {content}
      {button}
    </div>
   
    // </div>
  );
}

export default App