import React from "react";
import { Link } from "react-router-dom";

export const CartSummary = ({ cart }) => {
  return (
    <div className="bg-white p-6 border border-gray-200  rounded mb-6">
      <h2 className="font-bold text-[18px] mb-6">Cart Summary</h2>
      <div className="flex justify-between items-center mb-3">
        <div className="text-xs">
          <strong>TOTAL:</strong> {cart?.total_items} item(s)
        </div>
        <div className="text-[26px] font-bold text-green-700">
          <span>{cart?.subtotal?.formatted_with_symbol?.split(".")[0]}</span>
        </div>
      </div>
      <div className="">
        <Link to="/login">
          <div className="bg-green-700 text-white  text-sm  hover:bg-green-800 h-[39px] flex justify-center items-center hover:cursor-pointer drop-shadow-lg">
            Proceed to checkout
          </div>
        </Link>
      </div>
    </div>
  );
};
