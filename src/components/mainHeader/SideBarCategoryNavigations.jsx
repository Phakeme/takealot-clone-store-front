import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import TimeWhiteIcon from "../../images/time-white-icon.svg";
import downArrowWhite from "../../images/down-arrow-white.svg";
import { SideBarCategorySingleLink } from "./SideBarCategorySingleLink";

export const SideBarCategoryNavigations = ({ heroNavigations }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [location]);

  const handleMouseOut = () => {
    if (location.pathname === "/") {
      return;
    }
    // setIsOpen(false);
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative hidden lg:block z-20">
      <div className=" absolute w-full shadow-lg bg-white text-sm">
        <div
          className="bg-gray-700 w-full h-8 text-white flex items-center px-3 text-xs justify-between cursor-pointer"
          // onClick={() => setIsOpen(!isOpen)}
          onClick={() => handleMouseOut()}
        >
          <span>Shop by Department</span>
          <span className="fill-white">
            <img width="8px" src={downArrowWhite} alt="" />
          </span>
        </div>
        {isOpen && (
          <ul className="my-2">
            {heroNavigations?.heroNavLinks?.map(({ label }) => (
              <SideBarCategorySingleLink label={label} key={label} />
            ))}
          </ul>
        )}

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
