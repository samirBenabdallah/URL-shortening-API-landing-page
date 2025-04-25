import React from "react";
import { brands, hero } from "../images/img";
import Button from "./Button";
import Card from "./Card";
import HeroSection from "./HeroSection";

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
      <section className="relative h-[90vh] max-[1050px]:h-max bg-Gray/20 py-14">
        <div
          className={`h-24 w-4/5 bg-Dark-Violet ml-[10%] rounded-md mb-10 
                bg-[url('images/bg-shorten-desktop.svg')] max-[1000px]:bg-[url('bg-shorten-mobile.svg')] 
                flex max-[800px]:flex-col justify-center items-center absolute -translate-y-1/2 top-0`}
        >
          <input
            type="text"
            placeholder="Shorten a link here..."
            className="bg-white rounded-md px-2 py-1 w-4/5
           text-Gray outline-none"
          />
          <Button
            className={
              "min-[800px]:ml-2 max-[800px]:mt-2 max-[800px]:w-4/5 text-center"
            }
            variant="raduis"
          >
            Shorten It!
          </Button>
        </div>
        <div className=""></div>
        <h1 className="text-center text-3xl font-bold my-5">
          Advanced Statistics
        </h1>
        <p className="mx-auto text-center w-[400px] max-[1050px]:w-[90%] text-Grayish-Violet font-semibold">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div
          className="relative h-max px-[10%] mt-12 
                max-[1050px]:flex-col max-[1050px]:items-center
                flex justify-between"
        >
          <div className="max-[1050px]:block hidden w-2 h-full rounded-full absolute left-1/2 -translate-x-1/2 bg-Cyan" />
          <div className="max-[1050px]:hidden w-[79%] h-2 mx-[10%] rounded-full absolute top-1/2 -translate-y-1/2 bg-Cyan left-0" />
          <Card
            icon={brands}
            title={"Brand recognition"}
            description={`Boost your brand recognition with each click. Generic links don't mean a
                    thing. Branded links help instil confidence in you content`}
          />
          <Card
            icon={brands}
            title={"Detailed Records"}
            description={`Gain insights into who is clicking 
                    your links. Knowing when and where people engage with your content helps inform better decisions.`}
            className={"mx-2 mt-5 max-[1050px]:my-16"}
          />

          <Card
            icon={brands}
            title={"Detailed Records"}
            description={`Gain insights into who is clicking 
                    your links. Knowing when and where people engage with your content helps inform better decisions.`}
            className={"mx-2 mt-10 max-[1050px]:m-0"}
          />
        </div>
      </section>
      {/* last section */}
    </div>
  );
}

export default Header;
