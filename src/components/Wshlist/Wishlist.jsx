import React from "react";
import { Link } from "react-router-dom";
import Padlock from "../../images/Wishlist/padlock.svg";
import { LoadingSpinner } from "../Utils/LoadingSpinner/index";
import { useChecResultContext } from "../../Context/ChecContextProvider";

export const Wishlist = ({ children }) => {
  const { isCartLoading } = useChecResultContext();

  if (isCartLoading) {
    return (
      <div className="flex justify-center items-center h-[200px] lg:h-[350px]">
        <LoadingSpinner />
      </div>
    );
  }
  return (
    <div>
      <div className="flex overflow-hidden bg-amber-100 border rounded py-3 px-6">
        <div className="w-[80px] relative mr-2 bg-left flex items-center -left-10">
          <div className="bg-amber-500 rounded-full absolute w-[100px] h-[100px] flex items-center">
            <img className="ml-10 w-[28px]" src={Padlock} alt="Truck" />
          </div>
        </div>
        <p className="text-sm">
          You are viewing your guest list. Log in for full access to your lists.
        </p>
        <span className="ml-2 text-sm hover:underline text-blue">
          <Link to="/login">Login</Link>
        </span>
      </div>
      <div className="mt-6">{children}</div>
    </div>
  );
};
