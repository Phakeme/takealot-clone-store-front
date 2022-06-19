import React from "react";
import { useChecResultContext } from "../../Context/ChecContextProvider";
import { ProductCard } from "../Products/ProductCard";

export const RelatedProducts = ({ singleProduct }) => {
  const { getSingleProduct } = useChecResultContext();
  return (
    <div className="mt-6 hidden md:block">
      <h2 className="font-bold mb-3">Related Products</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {singleProduct?.related_products?.slice(0, 2).map((item) => (
          <div key={item.id} onClick={() => getSingleProduct(item.id)}>
            <div className="h-full">
              <ProductCard product={item} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
