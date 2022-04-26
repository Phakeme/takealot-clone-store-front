import React, { useState } from "react";
import brandLogo from "../../images/takealot-logo.svg";
import Heart from "../../images/heart.svg";
import Cart from "../../images/shopping-cart.svg";
import { Link } from "react-router-dom";
import { NavLink } from "./NavLink";
import { MyAccounts } from "./MyAccounts";
import { MobileMainHeader } from "./MobileMainHeader";
import { MobileSideBar } from "./MobileSideBar";

export const MainHeader = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const handleOpenSide = () => {
    setIsSideBarOpen(true);
  };
  const handleCloseSide = () => {
    setIsSideBarOpen(false);
  };
  return (
    <header>
      {isSideBarOpen && <MobileSideBar handleCloseSide={handleCloseSide} />}
      <div className="bg-white h-16">
        <div className="h-full container mx-auto">
          <div className="hidden md:flex h-full flex justify-between items-center">
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
              <div className="hidden lg:block">
                <NavLink path="/orders" label="Orders" />
              </div>

              <div className="text-sm flex items-center justify-center  pl-2 h-8s">
                <MyAccounts />
                <div className="min-w-8 flex items-center justify-center mx-2 rounded-full bg-red-400 p-2 radius-2 cursor-pointer">
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
          <MobileMainHeader handleOpenSide={handleOpenSide} />
        </div>
      </div>
      <div className="bg-blue h-20"></div>
    </header>
  );
};
