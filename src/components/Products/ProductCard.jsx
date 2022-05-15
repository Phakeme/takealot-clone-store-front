import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import StarIcon from "../../images/star-rating.svg";
import PriceIcon from "../../images/slashed-price.svg";

export const ProductCard = ({ product }) => {
  const calcDiscount = (price) => {
    const originalPrice = Math.floor((price / 5) * 6);
    return {
      originalPrice,
      discPercentage: Math.ceil((price / originalPrice) * 100 - 100) * -1,
    };
  };
  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white h-full w-full p-3 border border-gray-200 rounded hover:drop-shadow-md flex flex-col">
        {product?.image ? (
          <div
            style={{ height: "60%" }}
            className="w-full flex items-center justify-center mb-3"
          >
            <img
              className="bg-red-100"
              loading="lazy"
              width="70%"
              src={product?.image?.url}
              alt="product"
            />
          </div>
        ) : (
          <div className="bg-gray-100" style={{ height: "60%" }}>
            loading
          </div>
        )}
        <div className="grow flex flex-col justify-between">
          <h4 className="text-sm">{product.name.slice(0, 60)}...</h4>
          <div className="h-[50px] pt-2">
            <div className="flex">
              <p className="text-base font-bold mr-2">
                {product.price.formatted_with_symbol}
              </p>{" "}
              <span className="text-sm text-gray-400 line-through mr-1">
                {`R ${calcDiscount(product.price.raw).originalPrice}`}
              </span>
              <img width="15px" src={PriceIcon} alt="star-rating" />
            </div>
            <div className="text-base flex">
              <img width="15px" src={StarIcon} alt="star-rating" />
              <span className="text-xs text-gray-400 mx-2">{`5(1) ${
                calcDiscount(product.price.raw).discPercentage
              } % OFF`}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
