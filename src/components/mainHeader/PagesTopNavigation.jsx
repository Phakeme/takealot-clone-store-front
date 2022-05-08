import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import BrandLogo from "../../images/takealot-logo.svg";
import Cart from "../../images/shopping-cart.svg";
import Heart from "../../images/heart.svg";
import { PagesTopNavSingleLink } from "./PagesTopNavSingleLink";
import { MyAccounts } from "./MyAccounts";
import { increment } from "../../features/cart/cartSlice";

export const PagesTopNavigation = () => {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  return (
    <div className="hidden sm:flex h-full flex justify-between items-center">
      <div className="flex">
        <Link to="/">
          <img
            className="mr-6"
            width="180px"
            height="auto"
            src={BrandLogo}
            alt="codealot-brand"
          />
        </Link>
        <div className="hidden lg:flex items-center divide-x">
          <PagesTopNavSingleLink path="/help" label="Help" />
          <PagesTopNavSingleLink path="/sell" label="Sell on Takealot" />
        </div>
      </div>
      <div className="flex items-center divide-x">
        <PagesTopNavSingleLink path="/login" label="Login" />
        <PagesTopNavSingleLink path="/register" label="Register" />
        <div className="hidden lg:block">
          <PagesTopNavSingleLink path="/orders" label="Orders" />
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
  );
};
