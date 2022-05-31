import React from "react";
import { useChecResultContext } from "../../Context/ChecContextProvider";

export const CategoryTopNavSingleLink = ({ label }) => {
  const { queryProduct } = useChecResultContext();

  return (
    <li
      className="h-full hover:bg-gray-200 grow"
      onClick={() => queryProduct(label)}
    >
      <div className="flex items-center justify-center h-full">{label}</div>
    </li>
  );
};
