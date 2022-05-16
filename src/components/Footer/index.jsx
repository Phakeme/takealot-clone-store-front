import React from "react";
import { FooterModule } from "./FooterModule";
import AppStoreLogo from "../../images/app-store.svg";
import GooglePlayLogo from "../../images/google-play.svg";
import GithubLogo from "../../images/github-logo.svg";
import LinkedinLogo from "../../images/linkedin-logo.svg";

export const Footer = () => {
  const footerModule = [
    {
      title: "Shop",
      footerLinks: [
        { textlabel: "Daily Deals", path: "/" },
        { textlabel: "App Only Deals", path: "/" },
        { textlabel: "Clearance Sale", path: "/" },
        { textlabel: "Gift Vouchers", path: "/" },
      ],
    },
    {
      title: "Help",
      footerLinks: [
        { textlabel: "Help", path: "/" },
        { textlabel: "Contact Us", path: "/" },
        { textlabel: "Submit an Idea", path: "/" },
        { textlabel: "Suggest a Product", path: "/" },
        { textlabel: "Shipping & Delivery", path: "/" },
        { textlabel: "Takealot Pickup Points", path: "/" },
        { textlabel: "Returns", path: "/" },
      ],
    },
    {
      title: "Account",
      footerLinks: [
        { textlabel: "My Account", path: "/" },
        { textlabel: "Track Order", path: "/" },
        { textlabel: "Returns", path: "/" },
        { textlabel: "Personal Details", path: "/" },
        { textlabel: "Invoices", path: "/" },
        { textlabel: "Digital Library", path: "/" },
      ],
    },
    {
      title: "Company",
      footerLinks: [
        { textlabel: "About Us", path: "/" },
        { textlabel: "Careers", path: "/" },
        { textlabel: "Sell on Takealot", path: "/" },
        { textlabel: "Deliver for Takealot", path: "/" },
        { textlabel: "Press & News", path: "/" },
        { textlabel: "Terms & Conditions", path: "/" },
        { textlabel: "Competitions", path: "/" },
        { textlabel: "Privacy Policy", path: "/" },
        { textlabel: "Human Rights Statement", path: "/" },
        { textlabel: "Speak Up Process", path: "/" },
      ],
    },
  ];
  return (
    <footer className="bg-white h-[200px]">
      <div className="container py-8 mx-auto grid grid-cols-5 border-b">
        <FooterModule footerModule={footerModule[0]} />
        <FooterModule footerModule={footerModule[1]} />
        <FooterModule footerModule={footerModule[2]} />
        <FooterModule footerModule={footerModule[3]} />
        <div>
          <div className="mb-6">
            <h3 className="font-bold mb-3">Download Our Apps</h3>
            <img className="mb-2" src={AppStoreLogo} alt="app-store" />
            <img className="mb-2" src={GooglePlayLogo} alt="google-play" />
          </div>
          <div className="mb-6">
            <h3 className="font-bold mb-3">Follow Me</h3>
            <div className="flex">
              <a
                href="https://github.com/Phakeme"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width="30px"
                  className="mb-2"
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
                  className="mx-2"
                  src={LinkedinLogo}
                  alt="linkedin-profile"
                />
              </a>
            </div>
          </div>
          <div className="">
            <h3 className="font-bold mb-3">My Other Projects</h3>
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
      </div>
      <div className="container mx-auto p-6">Tesxt</div>
      <div className="bg-blue">
        <div className="container mx-auto p-6">Tesxt</div>
      </div>
    </footer>
  );
};
