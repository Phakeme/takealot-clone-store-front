import React from "react";
import { CheckOrderBanner, SideAdverts } from "../components";

export const HomeContainer = () => (
  <>
    <section className="container mx-auto">
      <div className="grid grid-cols-[198px,1fr,300px] gap-6 h-[440px] mt-5">
        <div />
        <div className="bg-red-100">hero</div>
        <div className="w-full relative">
          <CheckOrderBanner />
          <SideAdverts />
        </div>
      </div>
    </section>
    <div className="bg-gray-100 h-72">text</div>
  </>
);
