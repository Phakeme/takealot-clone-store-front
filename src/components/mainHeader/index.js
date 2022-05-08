import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MobileSideBar } from "./mobiNavigations";
import { MobileMainHeader } from "./mobiNavigations/MobileMainHeader";
import { PagesTopNavigation } from "./PagesTopNavigation";
import { CategoryTopNav } from "./CategoryTopNav";
import { SideBarCategoryNavigations } from "./SideBarCategoryNavigations";
import { SearchBox } from "../SearchBox";

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
      <div className="h-full h-[60px] container mx-auto bg-white">
        <PagesTopNavigation />
        <MobileMainHeader />
      </div>
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
    </header>
  );
};
