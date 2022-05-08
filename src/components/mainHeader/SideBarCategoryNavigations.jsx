import React from "react";
import TimeWhiteIcon from "../../images/time-white-icon.svg";
import downArrowWhite from "../../images/down-arrow-white.svg";
import { SideBarCategorySingleLink } from "./SideBarCategorySingleLink";

export const SideBarCategoryNavigations = ({ heroNavigations }) => {
  return (
    <div className="relative hidden lg:block">
      <div className=" absolute w-full shadow-lg bg-white text-sm">
        <div className="bg-gray-700 w-full h-8 text-white flex items-center px-3 text-xs justify-between cursor-pointer">
          <span>Shop by Department</span>
          <span className="fill-white">
            <img width="8px" src={downArrowWhite} alt="" />
          </span>
        </div>
        <ul className="my-2">
          {heroNavigations?.heroNavLinks?.map(({ label, path }) => (
            <div key={path}>
              <SideBarCategorySingleLink label={label} path={path} />
            </div>
          ))}
        </ul>
        <div className="bg-green-500 w-full h-8 text-white flex items-center justify-center px-3 text-lg tracking-wide cursor-pointer">
          <span className="mr-2">
            <img width="13px" src={TimeWhiteIcon} alt="" />
          </span>
          DAILY DEALS
        </div>
      </div>
    </div>
  );
};
