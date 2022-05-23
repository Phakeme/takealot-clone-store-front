import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { StocksLocations } from "../Utils/StocksLocations";

export const ProductCarouselDisplay = ({ singleProduct }) => {
  const orderInfo = [
    "Eligible for Cash on Delivery",
    "Free Delivery Available",
    "Hassle-Free Exchanges.",
    "Returns for 30 Days",
    "12-Month Limited Warranty",
  ];
  return (
    <div>
      <div className="bg-white border border-gray-200 p-6 rounded">
        <div className="grid grid-cols-1 grid-rows-2 md:grid-rows-1 lg:grid-cols-[320px_1fr] gap-6">
          <div className="border-b-[2px] rounded">
            <Carousel showThumbs useKeyboardArrows showStatus={false}>
              {Array.isArray(singleProduct?.assets) &&
                singleProduct?.assets.map((image, i) => (
                  <div
                    className="h-[300px] flex justify-center items-center px-6"
                    key={i}
                  >
                    <img src={image?.url} alt="product" />
                  </div>
                ))}
            </Carousel>
          </div>
          <div className="flex flex-col justify-between">
            <div className="">
              <h1 className="text-[21px]">{singleProduct?.name}</h1>
              <div className="my-1">{singleProduct?.seo?.title}</div>
              <div className="mt-2 md:mt-5 text-sm">
                Be the first to
                <Link to="/login">
                  <span className="text-blue hover:underline">
                    {" "}
                    write a review
                  </span>
                </Link>
              </div>
            </div>
            <div className="h-[40px] md:h-[60px] border-y-2 flex items-center my-3">
              <span className="font-bold">In stock</span>
              <div className="mx-2 grid grid-cols-2 gap-2">
                <div className="flex justify-center items-center p-1 bg-gray-100">
                  <span className="text-xs font-bold">JHB</span>
                </div>
                <div className="flex justify-center items-center p-1 bg-gray-100">
                  <span className="text-xs font-bold">CPT</span>
                </div>
              </div>
              <Link to="/help">
                <span className="text-blue hover:underline text-xs">
                  {" "}
                  When do I get it?
                </span>
              </Link>
            </div>
            <div className="">
              {orderInfo?.map((item, index) => (
                <div key={index} className="h-8 text-sm">
                  <span className="mr-6">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
