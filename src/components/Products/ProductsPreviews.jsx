import React from "react";
import PropTypes from "prop-types";

export const ProductsPreviews = ({ products, labelText, children }) => {
  return (
    <div className="grid pb-3 grid-cols-[1fr,325px]">
      <div className="py-3 flex justify-between items-center">
        <h2 className=" text-2xl font-bold">{labelText}</h2>
        <h2 className=" text-2xl font-bold">See More</h2>
      </div>
      <div className="" />
      <div className="grid grid-cols-3 gap-6">
        {products?.map(({ id, label }) => (
          <div key={id}>{children}</div>
        ))}
      </div>
    </div>
  );
};

ProductsPreviews.propTypes = {
  products: PropTypes.array.isRequired,
  labelText: PropTypes.string.isRequired,
};
