import React from "react";
import CartIcon from "../../images/shopping-cart.svg";
import HeartIcon from "../../images/Wishlist/heart-outline.svg";
import { useChecResultContext } from "../../Context/ChecContextProvider";
import { Button } from "../../components/Utils/Button";

export const PriceDisplay = ({ singleProduct }) => {
  const { addToCart, isLoading } = useChecResultContext();

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

          <div onClick={() => console.log(singleProduct?.id)}>
            <Button
              LoadingState={isLoading}
              icon={HeartIcon}
              bg="bg-gray-100"
              bgHover="bg-gray-200"
              textLabel="+ Add to List"
              textColor="text-gray-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
