import React from "react";
import { CovidBanner } from "../components/covidBanner/CovidBanner";
import { MainHeader } from "../components/mainHeader/MainHeader";

export const HomeContainer = () => {
  return (
    <>
      <CovidBanner />
      <MainHeader />
    </>
  );
};
