import "./App.css";
import brid from "./assets/images/bread.svg";

export default function Splash() {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h1 className="text-center text-balance text-5xl tracking-wider leading-[100px] text-twine-900 font-serif">
        Simple
        <br />
        Breads
      </h1>
      <div className="mx-auto mt-8">
        <img src={brid} alt="" width="150" />
      </div>
    </div>
  );
}
