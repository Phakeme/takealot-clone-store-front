import React from "react";
import { Link } from "react-router-dom";
import Truck from "../images/truck.svg";

export const HomeContainer = () => (
  <section className="container mx-auto">
    <div className="grid grid-cols-[198px,1fr,330px] gap-6 h-[460px] mt-6">
      <div />
      <div className="bg-gray-100">hero</div>
      <Link to="/test">
        <div className="w-full">
          <div className="flex w-full h-20 shadow bg-sky-50 border-2 border-white overflow-hidden">
            <div className="w-36 relative mr-2 bg-left flex items-center -left-10">
              <div className="bg-sky-300 rounded-full absolute w-36 h-36 flex items-center">
                <img className="ml-10" src={Truck} alt="Truck" />
              </div>
            </div>
            <div className="w-3/4 my-auto">
              <p className="font-semibold mt-0">Where's my order?</p>
              <p className="text-xs">
                Check your delivery or collection status.
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  </section>
);
