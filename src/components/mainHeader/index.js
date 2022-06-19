import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MobileSideBar } from "./mobiNavigations";
import { MobileMainHeader } from "./mobiNavigations/MobileMainHeader";
import { PagesTopNavigation } from "./PagesTopNavigation";
import { CategoryTopNav } from "./CategoryTopNav";
import { SideBarCategoryNavigations } from "./SideBarCategoryNavigations";
import { SearchBox } from "../SearchBox";
import Arrow from "../../images/help/right-arrow.svg";

export const MainHeader = () => {
  const location = useLocation();
  const currentURL = location.pathname === "/help";
  const [heroNavigations, setHeroNavigations] = useState(false);
  const isSideBarOpen = useSelector((state) => state.sidebarIsOpen.value);

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
    <header className="relative">
      {isSideBarOpen && <MobileSideBar />}
      <div className="h-full h-[60px] container mx-auto bg-white">
        <PagesTopNavigation />
        <MobileMainHeader />
      </div>
      {!currentURL ? (
        <div className="hidden sm:block bg-blue h-[82px]">
          <div className="container mx-auto py-2 h-full">
            <div className=" grid grid-rows-1 gap-6 grid-cols-1 lg:grid-cols-[196px,1fr] h-full">
              <SideBarCategoryNavigations heroNavigations={heroNavigations} />

              <div className="h-full grid grid-rows-2 gap-2 py-0 text-sm">
                <SearchBox heroNavigations={heroNavigations} />
                <CategoryTopNav heroNavigations={heroNavigations} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="hidden sm:block bg-blue h-[132px] text-white">
          <div className="container mx-auto flex justify-between  items-center h-full">
            <div className="">
              <h1 className="text-[20px] font-bold mb-2">
                When will I get my order?
              </h1>
              <p className="text-sm">
                Find tracking information and order details in My Account, under
                Orders.
              </p>
            </div>
            <div className="px-6 py-2 text-blue bg-white text-sm cursor-pointer font-bold">
              <Link to="/login" className=" flex">
                {`View Orders`}{" "}
                <div>
                  <img className="w-[20px] ml-2" src={Arrow} alt="arrow" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
