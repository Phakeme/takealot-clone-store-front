import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import BrandLogo from "../../images/takealot-logo.svg";
import downArrowWhite from "../../images/down-arrow-white.svg";
import Heart from "../../images/heart.svg";
import TimeWhiteIcon from "../../images/time-white-icon.svg";
import SearchWhiteIcon from "../../images/search-white-icon.svg";
import Cart from "../../images/shopping-cart.svg";
import { Link } from "react-router-dom";
import { NavLink } from "./NavLink";
import { MyAccounts } from "./MyAccounts";
import { MobileMainHeader } from "./mobiNavigations/MobileMainHeader";
import { MobileSideBar } from "./mobiNavigations/MobileSideBar";
import { increment } from "../../features/cart/cartSlice";
import { HeroNavLink } from "./Hero/HeroNavLink";
import { MainNav } from "./MainNav";
import { OptionSelect } from "./OptionSelect";

export const MainHeader = () => {
  const [heroNavigations, setHeroNavigations] = useState(false);
  const isSideBarOpen = useSelector((state) => state.sidebarIsOpen.value);
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("/hero-navigations")
      .then(function (response) {
        setHeroNavigations(response.data);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, []);

  return (
    <header>
      {isSideBarOpen && <MobileSideBar />}
      <div className="bg-white h-[60px]">
        <div className="h-full container mx-auto">
          <div className="hidden md:flex h-full flex justify-between items-center">
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
      <div className="hidden sm:block bg-blue h-[82px]">
        <div className="container mx-auto py-2 h-full">
          <div className=" grid grid-rows-1 gap-6 grid-cols-[196px,1fr] h-full">
            <div className="relative">
              <div className="absolute w-full shadow-lg bg-white text-sm">
                <div className="bg-gray-700 w-full h-8 text-white flex items-center px-3 text-xs justify-between cursor-pointer">
                  <span>Shop by Department</span>
                  <span className="fill-white">
                    <img width="8px" src={downArrowWhite} alt="" />
                  </span>
                </div>
                <ul className="my-2">
                  {heroNavigations?.heroNavLinks?.map(({ label, path }) => (
                    <div key={path}>
                      <HeroNavLink label={label} path={path} />
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
            <div className="h-full grid grid-rows-2 gap-2 py-0 text-sm">
              <div className="bg-white h-full rounded grid grid-cols-[1fr,190px,50px] overflow-hidden">
                <input
                  className="w-full h-full p-1 pl-2 outline-none"
                  type="search"
                  id="site-search"
                  name="q"
                  autoComplete="off"
                  placeholder="Search for products, brands..."
                />

                <OptionSelect heroNavigations={heroNavigations} />
                <div className="bg-gray-800 h-full flex justify-center items-center cursor-pointer">
                  <img width="15px" src={SearchWhiteIcon} alt="search-icon" />
                </div>
              </div>
              <MainNav heroNavigations={heroNavigations} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
