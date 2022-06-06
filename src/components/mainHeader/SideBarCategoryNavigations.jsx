import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TimeWhiteIcon from "../../images/time-white-icon.svg";
import downArrowWhite from "../../images/down-arrow-white.svg";
import { SideBarCategorySingleLink } from "./SideBarCategorySingleLink";
import { useChecResultContext } from "../../Context/ChecContextProvider";

export const SideBarCategoryNavigations = ({ heroNavigations }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { queryProduct } = useChecResultContext();

  const [isOpen, setIsOpen] = useState(false);
  const [isBannerOpen, setIsBannerOpen] = useState(false);
  const [currentBackground, setCurrentBackground] = useState(null);

  useEffect(() => {
    if (location.pathname === "/") {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [location]);

  const handleSubmit = (textQuery) => {
    queryProduct(textQuery);
    navigate("/results", { replace: true });
    setIsBannerOpen(false);
  };

  const handleMouseEnter = (image, text) => {
    setIsBannerOpen(true);
    setCurrentBackground(image);
  };

  const handleMouseOut = () => {
    if (location.pathname === "/") {
      return;
    }
    // setIsOpen(false);
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative hidden lg:block z-20">
      <div
        className=" absolute w-full shadow-lg bg-white text-sm"
        onMouseLeave={() => setIsBannerOpen(false)}
      >
        <div
          className="bg-gray-700 w-full h-8 text-white flex items-center px-3 text-xs justify-between cursor-pointer"
          // onClick={() => setIsOpen(!isOpen)}
          onClick={() => handleMouseOut()}
        >
          <span className="relative">Shop by Department</span>
          {isBannerOpen && (
            <div
              className="bg-gray-100 p-3 absolute left-[196px] top-[0px] h-[512px] w-[200px]"
              style={{
                backgroundImage: `url(${currentBackground?.image})`,
                backgroundPosition: "top",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              onClick={() => handleSubmit(currentBackground?.label)}
            ></div>
          )}

          <span className="fill-white">
            <img width="8px" src={downArrowWhite} alt="" />
          </span>
        </div>
        {isOpen && (
          <ul className="my-2">
            {heroNavigations?.heroNavLinks?.map(({ label, image }) => (
              <li
                key={label}
                onMouseEnter={() => handleMouseEnter({ label, image })}
              >
                <SideBarCategorySingleLink label={label} />
              </li>
            ))}
          </ul>
        )}

        <div className="bg-green-500 w-full h-8 text-white flex items-center justify-center px-3 text-lg tracking-wide">
          <span className="mr-2">
            <img width="13px" src={TimeWhiteIcon} alt="" />
          </span>
          DAILY DEALS
        </div>
      </div>
    </div>
  );
};
