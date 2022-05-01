// import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import brandLogo from "../../images/takealot-logo.svg";
import Heart from "../../images/heart.svg";
import Cart from "../../images/shopping-cart.svg";
import { Link } from "react-router-dom";
import { NavLink } from "./NavLink";
import { MyAccounts } from "./MyAccounts";
import { MobileMainHeader } from "./mobiNavigations/MobileMainHeader";
import { MobileSideBar } from "./mobiNavigations/MobileSideBar";
import { increment } from "../../features/cart/cartSlice";

export const MainHeader = () => {
  const isSideBarOpen = useSelector((state) => state.sidebarIsOpen.value);
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  return (
    <header>
      {isSideBarOpen && <MobileSideBar />}
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
                  <div className="" onClick={() => dispatch(increment())}>
                    <img width="18px" src={Cart} alt="cart" />
                  </div>
                  <div className="pl-2 pr-1">{cart}</div>
                </div>
              </div>
            </div>
          </div>
          <MobileMainHeader />
        </div>
      </div>
      <div className="hidden sm:block bg-blue h-20">
        <div className="container mx-auto py-2 h-full">
          <div className=" grid grid-rows-1 gap-6 grid-cols-[196px,1fr] h-full">
            <div className=" relative">
              <div className="absolute w-full bg-red-100">
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
              </div>
            </div>
            <div className="bg-green-100 h-full">test</div>
          </div>
        </div>
      </div>
    </header>
  );
};
