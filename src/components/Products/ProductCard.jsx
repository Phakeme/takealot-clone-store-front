import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import StarIcon from "../../images/star-rating.svg";
import CartIcon from "../../images/shopping-cart.svg";
import PriceIcon from "../../images/slashed-price.svg";
import { Button } from "../Utils/Button";
import { useLocation } from "react-router-dom";
import { useChecResultContext } from "../../Context/ChecContextProvider";

export const ProductCard = ({ product }) => {
  const { isLoading, addToCart } = useChecResultContext();
  const location = useLocation();
  let currentURL = location.pathname === "/results";
  const calcDiscount = (price) => {
    const originalPrice = Math.floor((price / 5) * 6);
    return {
      originalPrice,
      discPercentage: Math.ceil((price / originalPrice) * 100 - 100) * -1,
    };
  };
  return (
    <div className="bg-white h-full  w-full p-3 border border-gray-200 rounded hover:drop-shadow-md flex flex-col w-2/3 sm:w-full mx-auto">
      <div className="h-full">
        <Link to={`/product/${product.id}`}>
          <div className="h-full flex justify-between flex-col">
            {product?.image ? (
              <div className="w-full flex items-center justify-center mb-3  min-h-[100px] lg:h-3/5">
                <img
                  className="p-3 w-2/3 sm:w-3/4 lg:w-5/6"
                  loading="lazy"
                  src={product?.image?.url}
                  alt="product"
                />
              </div>
            ) : (
              <div className="bg-gray-100" style={{ height: "60%" }}>
                loading
              </div>
            )}
            <div className="self-end flex flex-col justify-between w-full">
              <h4 className="text-sm">{product.name.slice(0, 35)}...</h4>
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
      </div>
      {currentURL && (
        <div className="mt-2" onClick={() => addToCart(product?.id)}>
          <Button
            LoadingState={isLoading}
            icon={CartIcon}
            bg="bg-green-700"
            bgHover="bg-green-800"
            textLabel="+ Add to Cart"
          />
        </div>
      )}
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
