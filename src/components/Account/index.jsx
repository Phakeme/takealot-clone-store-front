import React from "react";
import { Link } from "react-router-dom";

export const AccountType = ({ item }) => {
  return (
    <div className="rounded bg-white border px-5 py-5">
      <div className="flex justify-between">
        <div className="font-bold">
          <h2>{item.type}</h2>
        </div>
        <div className="">
          <img className="w-[25px]" src={item.icon} alt={item.type} />
        </div>
      </div>
      <ul className="my-2">
        {item.links?.map((item, index) => (
          <li
            className="text-sm mb-1 text-blue hover:underline w-fit"
            key={index}
          >
            <Link to={item.path}>{item.textLabel}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
