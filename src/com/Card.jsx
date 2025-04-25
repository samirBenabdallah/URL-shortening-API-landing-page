import React from "react";

function Card({ className, title, description, icon }) {
  return (
    <div
      className={`relative max-[1050px]:text-center flex flex-col w-[300px] h-[200px] px-6 pb-5 rounded-md bg-white ${className}`}
    >
      <div className="absolute top-0 -translate-y-1/2 max-[1050px]:left-1/2 max-[1050px]:-translate-x-1/2 bg-Very-Dark-Violet w-16 h-16 grid place-items-center p-2 rounded-[50%]">
        <img src={icon} alt="brand recognition" className="w-3/5" />
      </div>
      <h2 className="capitalize mt-10 font-bold text-Very-Dark-Blue text-2xl">
        {title}
      </h2>
      <p className="text-Gray leading-[20px] mt-auto block">{description}</p>
    </div>
  );
}

export default Card;
