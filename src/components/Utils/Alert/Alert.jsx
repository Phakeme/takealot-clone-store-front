import React from "react";
import CheckIcon from "../../../images/util/check.svg";

export const Alert = () => {
  return (
    <div className="p-3 z-50 bg-white fixed right-[50px] top-[104px] w-[250px] drop-shadow-xl border-b-2 border-green-500 flex items-center cursor-pointer">
      <img className="w-[18px]" src={CheckIcon} alt="check" />
      <div className="text-xs text-green-600 ml-2">
        Product Added Successfully
      </div>
    </div>
  );
};
