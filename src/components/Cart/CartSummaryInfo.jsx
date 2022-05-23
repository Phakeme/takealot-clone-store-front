import React from "react";
import CreditCard from "../../images/Cart/card.svg";
import Truck from "../../images/Cart/truck.svg";
import Padlock from "../../images/Cart/padlock.svg";

export const CartSummaryInfo = () => {
  const data = [
    { textLabel: "Secure checkout", icon: Padlock },
    { textLabel: "Many ways to pay", icon: CreditCard },
    { textLabel: "Fast, reliable delivery", icon: Truck },
  ];
  return (
    <div className="bg-white px-6 py-3 border border-gray-200  rounded">
      <ul>
        {data?.map(({ textLabel, icon }, index) => (
          <li key={index} className="flex text-xs my-3">
            <img className="w-[18px] mr-6" src={icon} alt="icon" />
            <div>{textLabel}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
