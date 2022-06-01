import React from "react";
import { useNavigate } from "react-router-dom";
import rightIcon from "../../images/right-arrow.svg";
import { useChecResultContext } from "../../Context/ChecContextProvider";

export const SideBarCategorySingleLink = ({ label }) => {
  const navigate = useNavigate();
  const { queryProduct } = useChecResultContext();
  const handleSubmit = (textQuery) => {
    queryProduct(textQuery);
    navigate("/results", { replace: true });
  };

  return (
    <li
      className="bg-white w-full h-6 hover: hover:bg-blue hover:text-white  items-center px-3 flex justify-between cursor-pointer"
      onClick={() => handleSubmit(label)}
    >
      <span>{label}</span>
      <span className="fill-white">
        <img width="8px" src={rightIcon} alt="down" />
      </span>
    </li>
  );
};
