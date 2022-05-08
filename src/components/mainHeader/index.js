import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SearchWhiteIcon from "../../images/search-white-icon.svg";
import { MobileSideBar } from "./mobiNavigations";
import { MobileMainHeader } from "./mobiNavigations/MobileMainHeader";
import { PagesTopNavigation } from "./PagesTopNavigation";
import { CategoryTopNav } from "./CategoryTopNav";
import { SideBarCategoryNavigations } from "./SideBarCategoryNavigations";
import { OptionSelect } from "./OptionSelect";

export const MainHeader = () => {
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
    <header>
      {isSideBarOpen && <MobileSideBar />}
      <div className="h-full bg-white h-[60px] container mx-auto">
        <PagesTopNavigation />
        <MobileMainHeader />
      </div>
      <div className="hidden sm:block bg-blue h-[82px]">
        <div className="container mx-auto py-2 h-full">
          <div className=" grid grid-rows-1 gap-6 grid-cols-1 lg:grid-cols-[196px,1fr] h-full">
            <SideBarCategoryNavigations heroNavigations={heroNavigations} />

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
              <CategoryTopNav heroNavigations={heroNavigations} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
