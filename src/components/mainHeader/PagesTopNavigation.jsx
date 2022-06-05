import React from "react";
import { Link, useLocation } from "react-router-dom";
import BrandLogo from "../../images/branding/codealot-logo.svg";
import CartIcon from "../../images/shopping-cart.svg";
import Heart from "../../images/heart.svg";
import { PagesTopNavSingleLink } from "./PagesTopNavSingleLink";
import { MyAccounts } from "./MyAccounts";
import { useChecResultContext } from "../../Context/ChecContextProvider";

export const PagesTopNavigation = () => {
  const location = useLocation();
  const currentURL = location.pathname === "/help";
  const {
    cart: { total_items },
  } = useChecResultContext();

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
          {!currentURL && (
            <PagesTopNavSingleLink path="/login" label="Sell on Codealot" />
          )}
        </div>
      </div>
      {!currentURL && (
        <div className="flex items-center divide-x">
          <PagesTopNavSingleLink path="/login" label="Login" />
          <PagesTopNavSingleLink path="/login" label="Register" />
          <div className="hidden lg:block">
            <PagesTopNavSingleLink path="/login" label="Orders" />
          </div>
          <div className="text-sm flex items-center justify-center  pl-2 h-8s">
            <MyAccounts />
            <Link to="/wishlist">
              <div className="min-w-8 flex items-center justify-center mx-2 rounded-full bg-red-400 p-2 radius-2 cursor-pointer">
                <img width="17px" src={Heart} alt="" />
              </div>
            </Link>

            <Link to="/cart">
              <div className="h-full flex items-center justify-center bg-green-700 rounded-full p-2 text-white cursor-pointer">
                <div className="">
                  <img width="18px" src={CartIcon} alt="cart" />
                </div>
                <div className="pl-2 pr-1">
                  {total_items ? <span>{total_items}</span> : <span>0</span>}
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
