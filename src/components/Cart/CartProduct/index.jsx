import React from "react";
import { StocksLocations } from "../../Utils/StocksLocations";
import HeartIcon from "../../../images/Cart/gray-heart.svg";
import BinIcon from "../../../images/Cart/trash.svg";
import { CartAction } from "./CartAction";

export const CartProduct = ({ product }) => {
  return (
    <div className="h-fit lg:h-[191px] bg-white p-6 border border-gray-200  rounded mb-3 md:mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] lg:grid-cols-[140px_1fr] gap-6 h-full">
        <div className="h-full flex justify-center items-center p-2 border-2 sm:border-none">
          <img
            className="w-full h-auto"
            src={product?.image?.url}
            alt="cart-product"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex justify-between">
            <div>
              <h2 className="hidden lg:block">
                {product?.name.slice(0, 60)}...
              </h2>
              <h2 className="block lg:hidden">
                {product?.name.slice(0, 30)}...
              </h2>
              <span className="text-xs text-gray-400">
                Promotion Applied: Massive Sale
              </span>
              <div>
                <StocksLocations />
              </div>
            </div>
            <div className="">
              <div className="text-[18px] text-right font-bold mb-3">
                <span>
                  {product?.line_total?.formatted_with_symbol?.split(".")[0]}
                </span>
              </div>
              <div className="flex">
                <div className="mr-3 text-sm">Qty:</div>
                <div>
                  <select
                    id="pet-select"
                    className="w-full h-full px-2 outline-hidden focus:outline-none cursor-pointer border-b-2"
                  >
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex justify-between w-full items-end">
              <div className="text-xs bg-gray-100 border-2 px-2 py-1 rounded w-fit h-fit border-dashed hidden sm:block">
                Eligible for Cash on Delivery
              </div>
              <div className="flex text-sm items-center">
                <CartAction textLabel="Remove" icon={BinIcon} />
                <CartAction textLabel="Move to list" icon={HeartIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
