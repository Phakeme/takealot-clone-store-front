import React, { useState } from "react";
import { useDispatch } from "react-redux";
import brandLogo from "../../../images/branding/codealot-logo.svg";
import Search from "../../../images/search.svg";
import BlackShoppingCart from "../../../images/black-shopping-cart.svg";
import Menu from "../../../images/open-menu.svg";
import { Link } from "react-router-dom";
import { openSideBar } from "../../../features/sideBar/sidebarIsOpenSlice";
import { MobiSearch } from "./MobiSearch";

export const MobileMainHeader = () => {
  const [isSearchFormOpen, setIsSearchFormOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="sm:hidden h-full">
      {!isSearchFormOpen ? (
        <div className="flex justify-between items-center h-full">
          <div
            className="hover: cursor-pointer p-3"
            onClick={() => dispatch(openSideBar())}
          >
            <img width="20px" src={Menu} alt="open-menu" />
          </div>
          <Link to="/">
            <img
              className=""
              width="160px"
              src={brandLogo}
              alt="codealot-brand"
            />
          </Link>
          <div className="flex">
            <div
              className="p-2 flex items-center justify-center hover: cursor-pointer"
              onClick={() => setIsSearchFormOpen(true)}
            >
              <img width="18px" src={Search} alt="search" />
            </div>
            <div className="p-2 hover: cursor-pointer">
              <img
                width="23px"
                src={BlackShoppingCart}
                alt="black-shoping-cart"
              />
            </div>
          </div>
        </div>
      ) : (
        <MobiSearch setIsSearchFormOpen={setIsSearchFormOpen} />
      )}
    </div>
  );
};
