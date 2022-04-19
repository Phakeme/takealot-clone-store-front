import React from "react";
import { CovidBanner } from "../components/CovidBanner";

export const HomeContainer = () => {
  return (
    <div>
      <CovidBanner />
      <header className="">
        <p>Main Header</p>
      </header>
    </div>
  );
};
