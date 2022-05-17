import React from "react";
import { FooterTitle } from "./FooterTitle";
import AppStoreLogo from "../../images/app-store.svg";
import GooglePlayLogo from "../../images/google-play.svg";
import GithubLogo from "../../images/github-logo.svg";
import LinkedinLogo from "../../images/linkedin-logo.svg";

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
      <div className="mb-0 lg:mb-6 flex flex-col items-end lg:items-start">
        <FooterTitle title="Follow Me" />
        <div className="flex flex-row items-end lg:items-start">
          <a
            href="https://github.com/Phakeme"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="30px"
              className="mb-0 lg:mb-2"
              src={GithubLogo}
              alt="github-profile"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/phakeme-fakazi-331175112/
        "
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="31px"
              className="mx-0 lg:mx-2 ml-2 lg:ml-2"
              src={LinkedinLogo}
              alt="linkedin-profile"
            />
          </a>
        </div>
      </div>
      <div className="hidden lg:block">
        <FooterTitle title="My Other Projects" />
        <a
          href="https://www.linkedin.com/in/phakeme-fakazi-331175112/
        "
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-sm hover:underline hover:text-blue w-fit">
            Elegant Store
          </p>
        </a>
        <a
          href="https://www.linkedin.com/in/phakeme-fakazi-331175112/
        "
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-sm hover:underline hover:text-blue  w-fit">
            Godly Search
          </p>
        </a>
        <a
          href="https://www.linkedin.com/in/phakeme-fakazi-331175112/
        "
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-sm hover:underline hover:text-blue  w-fit">
            Wedding Invite
          </p>
        </a>
      </div>
    </div>
  );
};
