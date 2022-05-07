import React from "react";
import { Link } from "react-router-dom";
// requires a loader
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import carouselBg1 from "../../images/carousel-bg-1.png";
import carouselBg2 from "../../images/carousel-bg-2.png";
import carouselBg3 from "../../images/carousel-bg-3.png";

export const MainCarousel = () => {
  const data = [
    {
      bgImage: carouselBg1,
      path: "/product",
    },
    {
      bgImage: carouselBg2,
      path: "/product",
    },
    {
      bgImage: carouselBg3,
      path: "/product",
    },
  ];
  return (
    <Carousel
      className=""
      showIndicators
      showThumbs={false}
      infiniteLoop
      autoPlay
      showStatus={false}
      interval={5000}
    >
      {data?.map(({ path, bgImage }, index) => (
        <Link to={path} key={index}>
          <div
            style={{ backgroundImage: `url(${bgImage})` }}
            className="h-[300px] bg-center"
          />
        </Link>
      ))}
    </Carousel>
  );
};
