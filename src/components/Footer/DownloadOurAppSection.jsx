import React from "react";
import { FooterTitle } from "./FooterTitle";
import AppStoreLogo from "../../images/app-store.svg";
import GooglePlayLogo from "../../images/google-play.svg";

export const DownloadOurAppSection = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-1">
      <div className="mb-0 lg:mb-6">
        <FooterTitle title="Download Our Apps" />
        <div className="flex flex-row lg:flex-col">
          <img
            width="120px"
            className="mb-0 lg:mb-2 mr-2"
            src={AppStoreLogo}
            alt="app-store"
          />
          <img
            width="120px"
            className="mb-0 lg:mb-2"
            src={GooglePlayLogo}
            alt="google-play"
          />
        </div>
      </div>
    </div>
  );
};
