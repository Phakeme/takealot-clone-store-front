import React, { useState } from "react";
import { MainNavLink } from "./MainNavLink";

export const MainNav = ({ heroNavigations }) => {
  let currentWidth = window.innerWidth;
  let sliceLastItem = 7;
  const [screenWidth, setScreenWidth] = useState({ currentWidth });

  // Check the Window Width Size and updated the State
  function resizeListener() {
    setScreenWidth(window.innerWidth);
  }

  window.addEventListener("resize", resizeListener);

  if (screenWidth < 1280) {
    sliceLastItem = 5;
  }

  if (screenWidth < 1024) {
    sliceLastItem = 4;
  }

  if (screenWidth < 769) {
    sliceLastItem = 3;
  }

  return (
    <ul className="bg-gray-100 rounded h-full flex divide-x-2">
      {heroNavigations?.heroNavLinks
        ?.slice(0, sliceLastItem)
        .map(({ label, path }) => (
          <MainNavLink key={path} label={label} path={path} />
        ))}
    </ul>
  );
};
