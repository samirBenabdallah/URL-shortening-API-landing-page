import React from "react";
import Button from "./Button";
import { hero } from "../images/img";

function HeroSection({ className }) {
  return (
    <section className={`${className}`}>
      <aside className="w-1/2 max-[800px]:w-[90%] text-center">
        <h1 className="text-[50px] font-extrabold leading-[50px] mb-3 max-[700px]:text-3xl">
          More than just shorter links
        </h1>
        <p className="text-Gray w-[400px] max-[400px]:w-full font-semibold">
          Build your brand's reognition and get detailed ibsights on how your
          links are performing
        </p>
        <Button className={"w-max mt-5 max-[1100px]:mx-auto"}>
          Get Started
        </Button>
      </aside>
      <img
        src={hero}
        alt="hero img"
        className="w-1/2 relative left-10 max-[1100px]:left-0"
      />
    </section>
  );
}

export default HeroSection;
