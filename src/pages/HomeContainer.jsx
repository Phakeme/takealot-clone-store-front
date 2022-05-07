import React from "react";
import {
  CheckOrderBanner,
  SideAdverts,
  MainCarousel,
  LogoCarousel,
} from "../components";

export const HomeContainer = () => (
  <>
    <section className="container mx-auto">
      <div className="grid grid-cols-[198px,1fr,300px] gap-6 h-[440px] mt-5">
        <div />
        <div className="">
          <MainCarousel />
          <div className="flex flex-col">
            <h3 className="py-4 font-semibold">
              See My Other Portfolio Projects
            </h3>
            <LogoCarousel />
          </div>
        </div>
        <div className="w-full relative">
          <CheckOrderBanner />
          <SideAdverts />
        </div>
      </div>
    </section>
    <div className="bg-gray-100 h-72">
      {/* <LogoCarousel /> */}
      test
    </div>
  </>
);
