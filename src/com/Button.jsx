import React from "react";

function Button({ className, onClick, children, variant = "default" }) {
  let style = "";

  switch (variant) {
    case "transparent":
      style = "rounded-full bg-transparent text-Gray";
      break;
    case "raduis":
      style = "rounded-md bg-Cyan text-white";
      break;
    default:
      style = "rounded-full bg-Cyan text-white hover:bg-Cyan/80 ";
  }

  return (
    <div
      onClick={onClick}
      className={`px-4 py-1 cursor-pointer duration-300 ${style} ${className}`}
    >
      {children}
    </div>
  );
}

export default Button;
