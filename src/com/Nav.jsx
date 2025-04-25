import React from "react";
import { logo } from "../images/img";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

function Nav({ navState, setNavState }) {
  return (
    <>
      {/* desktop app */}
      <div className="max-[1000px]:hidden w-full h-[10vh] flex items-center px-[10%] py-2">
        <img src={logo} alt="logo of web site" className="h-4/5" />
        <ul className="flex items-center ml-10">
          <li className="cursor-pointer text-Gray mr-3  capitalize hover:font-semibold hover:text-Very-Dark-Violet duration-300">
            feature
          </li>
          <li className="cursor-pointer text-Gray mr-3  capitalize hover:font-semibold hover:text-Very-Dark-Violet duration-300">
            pricing
          </li>
          <li className="cursor-pointer text-Gray  capitalize hover:font-semibold hover:text-Very-Dark-Violet duration-300">
            recources
          </li>
        </ul>
        <section className="ml-auto flex items-center">
          <Button variant={"transparent"} className={"font-semibold"}>
            Login
          </Button>
          <Button className={"font-semibold"}>Sign up</Button>
        </section>
      </div>
      {/* mobile app */}
      <div className="relative max-[1000px]:flex w-full h-[10vh] hidden items-center px-[10%] py-2">
        <img src={logo} alt="logo of web site" className="h-4/5 max-h-10" />
        <div
          className={`absolute top-0 z-40 left-0 w-screen h-screen bg-black/30 duration-300 ${navState? "opacity-100 block" : "hidden opacity-0"}`}
          onClick={() => setNavState(false)}
        />
        <ul
          className={`absolute z-40 left-1/2 bottom-0 -translate-x-1/2 translate-y-full duration-300 w-[300px] px-2 mt-10 rounded-xl bg-Dark-Violet ${
            navState ? "h-400px py-10" : "p-0 h-0 overflow-hidden"
          }`}
        >
          <li className="cursor-pointer text-Gray capitalize text-center mb-4">
            feature
          </li>
          <li className="cursor-pointer text-Gray capitalize text-center mb-4">
            pricing
          </li>
          <li className="cursor-pointer text-Gray capitalize text-center mb-4">
            recources
          </li>
          <hr className="text-Grayish-Violet" />
          <Button
            variant={"transparent"}
            className={"text-center font-semibold mt-3"}
          >
            Login
          </Button>
          <Button className={"text-center font-semibold mt-4 w-full"}>
            Sign up
          </Button>
        </ul>
        <Button
          variant="transparent"
          className={"hidden max-[1000px]:block ml-auto"}
          onClick={() => setNavState((curr) => !curr)}
        >
          <FontAwesomeIcon
            icon={navState ? faX : faBars}
            className="w-5 text-center text-2xl"
          />
        </Button>
      </div>
    </>
  );
}

export default Nav;
