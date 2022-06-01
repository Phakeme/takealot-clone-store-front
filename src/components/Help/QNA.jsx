import React, { useState } from "react";
import Bulb from "../../images/help/bulb.svg";
import X from "../../images/help/x.svg";
import Down from "../../images/help/arrow-down.svg";

export const QNA = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white px-6 py-4 drop-shadow-md cursor-pointer border-b-2 flex justify-between items-center text-xs md:text-sm"
      >
        <div className="">{item?.title}</div>
        <div className="min-w-[16px] ml-2">
          <img className="w-[15px]" src={isOpen ? X : Down} alt="" />
        </div>
      </div>
      {isOpen && (
        <div className="bg-gray-700 text-xs md:text-sm text-white p-6 grid grid-cols-[40px_1fr] gap-3">
          <div className="">
            <img className="w-[40px]" src={Bulb} alt="" />
          </div>
          <div className="">
            <span className="text-xs text-gray-400">ANSWER</span>
            <div className="">{item?.body}</div>
          </div>
        </div>
      )}
    </>
  );
};
