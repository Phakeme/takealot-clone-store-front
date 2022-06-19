import React from "react";
import ZandoLogo from "../../images/elegant-logo.svg";
import GodlyLogo from "../../images/Gogly-logo.svg";
import WeddingLogo from "../../images/wedding-logo.svg";

export const LogoCarousel = () => {
  const data = [
    {
      image: ZandoLogo,
      path: "https://github.com/Phakeme/elegant-estore",
    },
    { image: GodlyLogo, path: "https://github.com/Phakeme/godly-search" },
    { image: WeddingLogo, path: "https://woza.vercel.app/" },
  ];

  return (
    <div className="h-[61px] grid grid-cols-3 gap-3 bg-gray-100">
      {data?.map(({ path, image }, index) => (
        <a key={index} href={path} target="_blank" rel="noreferrer">
          <div className="flex justify-center items-center h-full">
            <img className="w-2/3 md:w-1/2" src={image} alt="logo-preview" />
          </div>
        </a>
      ))}
    </div>
  );
};
