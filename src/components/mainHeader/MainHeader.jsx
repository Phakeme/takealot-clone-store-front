import React from "react";
import brandLogo from "../../images/takealot-logo.svg";
import Heart from "../../images/heart.svg";
import Cart from "../../images/shopping-cart.svg";
import ArrowDown from "../../images/arrow-down.svg";
import { Link } from "react-router-dom";
import { NavLink } from "./NavLink";

export const MainHeader = () => {
  return (
    <header>
      <div className="bg-white h-16">
        <div className="h-full container mx-auto flex justify-between items-center">
          <div className="flex">
            <Link to="/">
              <img
                className="mr-6"
                width="180px"
                src={brandLogo}
                alt="codealot-brand"
              />
            </Link>
            <div className="flex items-center divide-x">
              <NavLink path="/help" label="Help" />
              <NavLink path="/sell" label="Sell on Takealot" />
            </div>
          </div>
          <div className="flex items-center divide-x">
            <NavLink path="/login" label="Login" />
            <NavLink path="/register" label="Register" />
            <NavLink path="/orders" label="Orders" />

            <div className="text-sm flex items-center justify-center  pl-2 h-8s">
              <div className="flex items-center justify-center p-2 cursor-pointer">
                <div>My Account</div>
                <div className="pl-2 ">
                  <img width="8px" src={ArrowDown} alt="" />
                </div>
              </div>
              <div className="flex items-center justify-center mx-2 rounded-full bg-red-400 p-2 radius-2 cursor-pointer">
                <img width="17px" src={Heart} alt="" />
              </div>

              <div className="h-full flex items-center justify-center bg-green-700 rounded-full p-2 text-white cursor-pointer">
                <div className="">
                  <img width="18px" src={Cart} alt="" />
                </div>
                <div className="pl-2 pr-1">0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue h-20"></div>
    </header>
  );
};
