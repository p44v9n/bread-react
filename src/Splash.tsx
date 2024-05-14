import "./App.css";
import brid from "./assets/bread.svg";
// import OverviewToggle from "./components/OverviewToggle";

export default function Splash() {

  return (
    <>
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
        {/* <OverviewToggle /> */}
      </>
  )
}