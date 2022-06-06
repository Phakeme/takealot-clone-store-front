import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { FooterModule } from "./FooterModule";
import { footerModulesData, footerLogosData } from "./data";
import { DownloadOurAppSection } from "./DownloadOurAppSection";
import { useChecResultContext } from "../../Context/ChecContextProvider";

export const Footer = () => {
  const location = useLocation();
  const currentURL = location.pathname === "/help";
  const [catergories, setCatergories] = useState(null);

  const navigate = useNavigate();
  const { queryProduct } = useChecResultContext();
  const handleSubmit = (textQuery) => {
    queryProduct(textQuery);
    navigate("/results", { replace: true });
    window.scrollTo(0, 0);
  };

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

  if (!currentURL) {
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
            <span
              onClick={() => handleSubmit(item?.label)}
              className="cursor-pointer text-blue hover:underline mr-2 pr-2 text-xs"
              key={index}
            >
              {item?.label}
            </span>
          ))}
        </div>
        <div className="bg-blue">
          <div className="container mx-auto p-6 flex justify-between text-sm text-white items-center flex-col lg:flex-row">
            <div className="md:hidden grid gap-3 grid-flow-col opacity-75 mb-5 md:mb-0">
              {footerLogosData.slice(0, 4).map((logo, index) => (
                <div key={index} className="">
                  <img
                    style={{ height: "20px" }}
                    src={logo}
                    alt="footer-brand"
                  />
                </div>
              ))}
            </div>
            <div className="hidden md:grid gap-3 grid-flow-col opacity-75 mb-5 md:mb-0">
              {footerLogosData.map((logo, index) => (
                <div key={index} className="">
                  <img
                    style={{ height: "20px" }}
                    src={logo}
                    alt="footer-brand"
                  />
                </div>
              ))}
            </div>
            <div className="">© Codealot Online (Pty) Ltd</div>
          </div>
        </div>
      </footer>
    );
  } else {
    return null;
  }
};
