import "./App.css";
import brid from "./assets/images/bread.svg";

export default function Splash() {

  return (
    <div className="flex flex-col align-center">
        <h1 className="text-center text-5xl tracking-wider leading-[100px] text-twine-900 font-serif">
          A<br />
          Simple
          <br />
          Loaf
          <br />
        </h1>
        <div className="mx-auto mt-20 mb-10">
          <img src={brid} alt="" width="150" />
        </div>
      </div>
  )
}