import React from "react";
import { Link } from "react-router-dom";
import StarIcon from "../../images/star-rating.svg";
import PriceIcon from "../../images/slashed-price.svg";

export const ProductCard = () => {
  return (
    <Link to="">
      <div className="bg-white h-full w-full p-3 border border-gray-200 rounded hover:drop-shadow-md flex flex-col">
        <div className="w-full flex items-center justify-center mb-3">
          <img
            loading="lazy"
            width="70%"
            src="https://pcinternational.co.za/wp-content/uploads/2022/04/msi-modern-14-b11m-11th-gen-core-i7-professional-laptop-1000px-v1-0001_uda2ul_ecud1x-300x300.jpg"
            alt="product"
          />
        </div>
        <div className="grow flex flex-col justify-between">
          <h4 className="text-sm">
            HP Notebook 255 G8 AMD Athlon 4GB 1TB HDD 15.6"
          </h4>
          <div className="h-[50px] pt-2">
            <div className="flex">
              <p className="text-base font-bold mr-2">R 900</p>{" "}
              <span className="text-sm text-gray-400 line-through mr-1">
                was price
              </span>
              <img width="15px" src={PriceIcon} alt="star-rating" />
            </div>
            <div className="text-base flex">
              <img width="15px" src={StarIcon} alt="star-rating" />
              <span className="text-xs text-gray-400 mx-2">5 (1)</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
