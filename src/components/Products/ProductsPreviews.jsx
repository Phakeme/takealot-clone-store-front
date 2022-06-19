import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useChecResultContext } from "../../Context/ChecContextProvider";

export const ProductsPreviews = ({ labelText, query, children }) => {
  let navigate = useNavigate();
  const { queryProduct } = useChecResultContext();
  const handleSubmit = (textQuery) => {
    if (!textQuery) return;
    queryProduct(textQuery);
    navigate("/results", { replace: true });
  };
  return (
    <>
      <div
        data-testid="popular-products-previews"
        className="py-3 flex justify-between items-center text-base lg:text-2xl font-bold mt-3"
      >
        <h2 className="">{labelText}</h2>

        <div
          className="py-1 px-2 border border-gray-800 rounded hover:bg-gray-800 hover:text-white cursor-pointer"
          onClick={() => handleSubmit(query)}
        >
          <h2 className="text-sm">View More</h2>
        </div>
      </div>
      <div className="" />
      <div>{children}</div>
    </>
  );
};

ProductsPreviews.propTypes = {
  children: PropTypes.array.isRequired,
  labelText: PropTypes.string.isRequired,
};
