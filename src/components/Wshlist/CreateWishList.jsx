import React from "react";
import ArrowIcon from "../../images/Wishlist/left-arrow.svg";
import { Link } from "react-router-dom";

export const CreateWishList = () => {
  return (
    <div className="bg-white rounded border h-fit">
      <Link to="/account">
        <div className="border-b-2 border-gray-100">
          <div className="py-2 px-6 font-bold flex">
            <img src={ArrowIcon} className="w-[13px]" alt="error" />
            <span className="ml-3">My lists</span>
          </div>
        </div>
      </Link>
      <div className="py-4 text-xs">
        <Link to="/login">
          <div className="bg-gray-100 mr-6 border-l-4 border-blue rounded-r-full">
            <p className="ml-6 py-2">Wish List (0)</p>
          </div>
        </Link>
        <Link to="/login">
          <div className="hover:bg-gray-100 mt-1 mr-6 rounded-r-full text-blue hover:delay-100 transition ">
            <p className="ml-6 py-2">+ Create list</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
