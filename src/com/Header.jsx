import React from "react";
import { brands, hero } from "../images/img";
import Button from "./Button";
import Card from "./Card";
import HeroSection from "./HeroSection";
import ShortItSection from "./ShortItSection";

function Header() {
  return (
    <div className="w-screen h-max">
      {/* first section */}
      <HeroSection
        className="pl-[10%] h-[90vh] w-full   
                    max-[1100px]:flex-col-reverse max-[1100px]:px-[5%]
                    max-[1100px]:justify-end max-[1100px]:h-max max-[1100px]:py-16
                    items-center justify-between flex"
      />
      <ShortItSection />
      {/* last section */}
    </div>
  );
}

export default Header;
