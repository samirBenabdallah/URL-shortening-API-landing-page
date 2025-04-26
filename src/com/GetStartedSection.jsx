import React from "react";
import Button from "./Button";

function GetStartedSection() {
  return (
    <div className="w-full h-max py-10 bg-Dark-Violet bg-[url('images/bg-boost-desktop.svg')] max-[500px]:bg-[url('images/bg-boost-mobile.svg')] bg-left bg-cover">
      <h1 className="select-none text-center text-2xl mb-3 text-white font-semibold">
        Boost your links today
      </h1>
      <Button className={"capitalize mx-auto w-max"}> get started</Button>
    </div>
  );
}

export default GetStartedSection;
