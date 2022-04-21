import React from "react";
import brandLogo from "../../images/takealot-logo.svg";
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
            <NavLink path="/my-account" label="My Account" />
            <NavLink path="/chart" label="Cart & Wish" />
          </div>
        </div>
      </div>
      <div className="bg-blue h-20"></div>
    </header>
  );
};
