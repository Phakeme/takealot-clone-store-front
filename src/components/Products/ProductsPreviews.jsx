import React from "react";
import PropTypes from "prop-types";
import { ProductCard } from "./ProductCard";
import { Link } from "react-router-dom";

export const ProductsPreviews = ({ products, labelText }) => {
  return (
    <>
      <div className="py-3 flex justify-between items-center text-base lg:text-2xl font-bold">
        <h2 className="">{labelText}</h2>
        <Link to="/products">
          <div className="py-1 px-2 border border-gray-800 rounded hover:bg-gray-800 hover:text-white">
            <h2 className="text-sm">View More</h2>
          </div>
        </Link>
      </div>
      <div className="" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:h-[280px] xl:h-[344px]">
        {products?.slice(0, 3).map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </>
  );
};

ProductsPreviews.propTypes = {
  products: PropTypes.array.isRequired,
  labelText: PropTypes.string.isRequired,
};
