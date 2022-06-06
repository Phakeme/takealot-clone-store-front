import React from "react";
import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import carouselBg1 from "../../images/carousel-bg-1.png";
import carouselBg2 from "../../images/carousel-bg-2.png";
import carouselBg3 from "../../images/carousel-bg-3.png";
import carouselBg4 from "../../images/carousel-bg-4.png";
import { useChecResultContext } from "../../Context/ChecContextProvider";

export const MainCarousel = () => {
  let navigate = useNavigate();
  const { queryProduct } = useChecResultContext();
  const handleSubmit = (textQuery) => {
    queryProduct(textQuery);
    navigate("/results", { replace: true });
  };
  const data = [
    {
      bgImage: carouselBg4,
      category: "home",
    },
    {
      bgImage: carouselBg2,
      category: "sport",
    },
    {
      bgImage: carouselBg1,
      category: "cooking",
    },
    {
      bgImage: carouselBg3,
      category: "books",
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
      {data?.map(({ category, bgImage }, index) => (
        <div
          key={index}
          onClick={() => handleSubmit(category)}
          className="cursor-pointer"
        >
          <div
            style={{ backgroundImage: `url(${bgImage})` }}
            className="h-[300px] bg-center"
          />
        </div>
      ))}
    </Carousel>
  );
};
