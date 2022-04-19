import React from "react";

export const CovidBanner = () => {
  return (
    <div className="hidden md:block">
      <div className="bg-blue text-white h-10 flex items-center justify-center text-sm">
        <p className="p-0 m-0">
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
    </div>
  );
};
