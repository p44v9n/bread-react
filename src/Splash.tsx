import "./App.css";
import brid from "./assets/bread.svg";

export default function Splash() {

  return (
    <>
        <h1 className="text-center text-3xl leading-[100px]">
          A<br />
          Simple
          <br />
          Loaf
          <br />
        </h1>
        <div className="mx-auto mt-20">
          <img src={brid} alt="" width="150" />
        </div>
      </>
  )
}