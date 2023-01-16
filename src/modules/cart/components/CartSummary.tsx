import { Link } from "react-router-dom";
import React from "react";

interface Props {
  total_items: string
  subtotal: string
}

export const CartSummary: React.FC<Props> = ({ total_items, subtotal }) => {
  return (
    <div className="bg-white p-6 border border-gray-200  rounded sm:mb-6 mb-4">
      <h2 className="font-bold text-[18px] mb-6">Cart Summary</h2>
      <div className="flex justify-between items-center mb-3">
        <div className="text-xs">
          <strong>TOTAL:</strong> {total_items} item(s)
        </div>
        <div className="text-[26px] font-bold text-green-700">
          <span>{subtotal}</span>
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
