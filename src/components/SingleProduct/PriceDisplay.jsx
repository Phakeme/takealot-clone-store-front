import ArrowIcon from "../../images/Cart/arrow-right.svg";
import { Button } from "../../components/Utils/Button";
import CartIcon from "../../images/shopping-cart.svg";
import { Link } from "react-router-dom";
import React from "react";
import { useCartResultContext } from "../../modules/cart/api/CartContextProvider";

export const PriceDisplay = ({ singleProduct }) => {
  const { addToCart, isLoading } = useCartResultContext();

  const handleOnCredit = () => {
    const price = singleProduct?.price?.raw * 1;
    if (price >= 1000) {
      return <p>{`On Credit: R ${Math.floor((price + 800) / 12)} / month`}</p>;
    }
    return null;
  };

  return (
    <div className="bg-white h-[260px] border border-gray-200 pt-3 px-6 pb-6 rounded">
      <div className="flex flex-col justify-between h-full">
        <div className="">
          <div className="">
            <h2 className="text-[35px] font-bold mb-0">
              {singleProduct?.price?.formatted_with_symbol}
            </h2>
          </div>
          <div className="uppercase relative font-bold mb-8">
            <span className="text-xs absolute -top-1">Free Delivery</span>
          </div>
          <div className="text-xs mb-2">
            <p>eB209,990 Discovery Miles 209,990</p>
            {handleOnCredit(singleProduct?.id)}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3">
          <div onClick={() => addToCart(singleProduct?.id)}>
            <Button
              LoadingState={isLoading}
              icon={CartIcon}
              bg="bg-green-700"
              bgHover="bg-green-800"
              textLabel="+ Add to Cart"
            />
          </div>

          <Link to="/cart">
            <Button
              icon={ArrowIcon}
              bg="bg-gray-700"
              bgHover="bg-gray-800"
              textLabel="Go to cart"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
