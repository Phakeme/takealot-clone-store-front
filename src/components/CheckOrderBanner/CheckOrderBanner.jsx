import React from "react";
import { Link } from "react-router-dom";
import Truck from "../../images/truck.svg";

export const CheckOrderBanner = () => {
  return (
    <Link to="/help">
      <div className="flex w-full h-[73px] shadow bg-sky-50 border-2 border-white overflow-hidden">
        <div className="w-32 relative mr-2 bg-left flex items-center -left-10">
          <div className="bg-sky-300 rounded-full absolute w-36 h-36 flex items-center">
            <img className="ml-10" src={Truck} alt="Truck" />
          </div>
        </div>
        <div className="w-3/4 my-auto">
          <p className="font-semibold mt-0">Where's my order?</p>
          <p className="text-xs">Check your delivery or collection status.</p>
        </div>
      </div>
    </Link>
  );
};
