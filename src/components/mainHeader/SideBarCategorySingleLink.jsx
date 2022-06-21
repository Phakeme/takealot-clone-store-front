import React from "react";
import rightIcon from "../../images/right-arrow.svg";

export const SideBarCategorySingleLink = ({ label }) => {
  return (
    <div className="bg-white w-full h-6 hover: hover:bg-blue hover:text-white  items-center px-3 flex justify-between cursor-pointer">
      <span>{label}</span>
      <span className="fill-white">
        <img width="8px" src={rightIcon} alt="down" />
      </span>
    </div>
  );
};
