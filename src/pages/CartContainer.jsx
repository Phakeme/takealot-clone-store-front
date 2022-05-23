import React from "react";
import { useChecResultContext } from "../Context/ChecContextProvider";
import { CartSummary, CartSummaryInfo, CartProduct } from "../components";

export const CartContainer = () => {
  const { cart } = useChecResultContext();
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-3">
        <h1 className="font-bold text-[20px] pb-5">Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_325px] gap-1 lg:gap-6">
          <div>
            {cart?.line_items?.map((product, index) => (
              <CartProduct key={product?.id} product={product} />
            ))}
          </div>
          <div>
            <CartSummary cart={cart} />
            <CartSummaryInfo />
          </div>
        </div>
        <h3 className="text-gray-700 text-sm mb-3 mt-6 lg:mt-0 w-fit text-center md:text-left">
          Placing an item in your shopping cart does not reserve that item or
          price. We only reserve stock for your order once payment is received.
        </h3>
      </div>
    </div>
  );
};
