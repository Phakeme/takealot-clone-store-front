import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FooterModule } from "./FooterModule";
import { footerModulesData, footerLogosData } from "./data";
import { DownloadOurAppSection } from "./DownloadOurAppSection";

export const Footer = () => {
  const [catergories, setCatergories] = useState(null);
  useEffect(() => {
    axios
      .get("/hero-navigations")
      .then(function (response) {
        setCatergories(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <footer className="bg-white h-[200px]">
      <div className="container py-8 mx-auto grid grid-cols-1 lg:grid-cols-5 border-b">
        {[0, 1, 2, 3].map((_, index) => (
          <FooterModule key={index} footerModule={footerModulesData[index]} />
        ))}
        <DownloadOurAppSection />
      </div>
      <div className="container mx-auto p-6 hidden md:block">
        {catergories?.heroNavLinks?.map((item, index) => (
          <Link
            className="text-blue hover:underline mr-2 pr-2 text-xs"
            to={item.path}
            key={index}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="bg-blue">
        <div className="container mx-auto p-6 flex justify-between text-sm text-white items-center flex-col lg:flex-row">
          <div className="grid grid-flow-col opacity-75 mb-5 lg:mb-0">
            {footerLogosData.map((logo, index) => (
              <div key={index} className="mr-4 ">
                <img style={{ height: "20px" }} src={logo} alt="footer-brand" />
              </div>
            ))}
          </div>
          <div>© Codealot Online (Pty) Ltd</div>
        </div>
      </div>
    </footer>
  );
};
