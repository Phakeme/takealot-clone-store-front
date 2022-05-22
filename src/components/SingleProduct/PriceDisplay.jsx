import React from "react";
import CartIcon from "../../images/shopping-cart.svg";
import { useChecResultContext } from "../../Context/ChecContextProvider";

export const PriceDisplay = ({ singleProduct }) => {
  const { addToCart, isCartLoading } = useChecResultContext();

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

        <div className="">
          <div
            className="bg-green-700 hover:bg-green-800 h-[39px] text-white mb-3 flex justify-center items-center hover:cursor-pointer"
            onClick={() => addToCart(addToCart(singleProduct?.id))}
          >
            {isCartLoading ? (
              <span>Loading...</span>
            ) : (
              <>
                <img
                  className="mr-3"
                  width="18px"
                  src={CartIcon}
                  alt="black-shoping-cart"
                />
                <span>+ Add to Cart</span>
              </>
            )}
          </div>
          <div className="bg-gray-100 hover:bg-gray-200 h-[39px] flex justify-center items-center hover:cursor-pointer">
            Add to List
          </div>
        </div>
      </div>
    </div>
  );
};
