import React from "react";
import { Link } from "react-router-dom";
import rightIcon from "../../../images/right-arrow.svg";

export const HeroNavLink = ({ label, path }) => {
  return (
    <Link key={label} to={path}>
      <li className="bg-white w-full h-6 hover: hover:bg-blue hover:text-white  items-center px-3 flex justify-between ">
        <span>{label}</span>
        <span className="fill-white">
          <img width="8px" src={rightIcon} alt="" />
        </span>
      </li>
    </Link>
  );
};
