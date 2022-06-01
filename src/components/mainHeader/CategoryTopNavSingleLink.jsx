import React from "react";
import { useNavigate } from "react-router-dom";
import { useChecResultContext } from "../../Context/ChecContextProvider";

export const CategoryTopNavSingleLink = ({ label }) => {
  const navigate = useNavigate();
  const { queryProduct } = useChecResultContext();

  const handleSubmit = (textQuery) => {
    queryProduct(textQuery);
    navigate("/results", { replace: true });
  };

  return (
    <li
      className="h-full hover:bg-gray-200 grow cursor-pointer"
      onClick={() => handleSubmit(label)}
    >
      <div className="flex items-center justify-center h-full">{label}</div>
    </li>
  );
};
