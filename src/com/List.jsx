import React from "react";

function List({ title, list, className }) {
  return (
    <ul className={`max-[790px]:text-center ${className}`}>
      <li className="text-white font-semibold mb-3">{title}</li>
      {list.map((ele, index) => (
        <li
          className=" cursor-pointer text-Gray duration-300 hover:text-Cyan capitalize mb-2"
          key={title + index}
        >
          {ele}
        </li>
      ))}
    </ul>
  );
}

export default List;
