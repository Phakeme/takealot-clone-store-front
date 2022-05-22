import React from "react";
import { useChecResultContext } from "../Context/ChecContextProvider";
import { CartSummary, CartSummaryInfo } from "../components";

export const CartContainer = () => {
  const { cart } = useChecResultContext();
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-3">
        <h1 className="font-bold text-[20px] pb-5">Shopping Cart</h1>
        <div className="grid grid-cols-[1fr_325px] gap-6">
          <div>
            <div className="h-[191px] bg-white p-6 border border-gray-200  rounded mb-6">
              Text
            </div>
          </div>
          <div>
            <CartSummary cart={cart} />
            <CartSummaryInfo />
          </div>
        </div>
      </div>
    </div>
  );
};
