import React, { useState } from "react";
import x from "../../images/x.svg";

export const CovidBanner = () => {
  const [, setIsOpen] = useState(true);

  const isClosed = JSON.parse(localStorage.getItem("covidBannerClosed"));
  if (isClosed) return null;

  const handleHideCovidBanner = () => {
    setIsOpen(false);
    localStorage.setItem("covidBannerClosed", JSON.stringify(true));
  };

  return (
    <div className="hidden md:block bg-blue text-white text-sm text-center p-2">
      <div className=" grid grid-rows-1 grid-cols-[1fr,50px] items-center">
        <div className="justify-self-center">
          <p>
            <strong>Stay informed! </strong>
            Visit the SA Department of Health's website for COVID-19 updates:{" "}
            <span className="underline">
              <a
                href="https://sacoronavirus.co.za/"
                target="_blank"
                rel="noreferrer"
              >
                www.sacoronavirus.co.za
              </a>
            </span>
          </p>
        </div>
        <div
          data-testid="cancel-option"
          className="justify-self-end cursor-pointer p-2"
          onClick={() => handleHideCovidBanner()}
        >
          <img src={x} height="auto" width="12px" alt="cancel-option" />
        </div>
      </div>
    </div>
  );
};
