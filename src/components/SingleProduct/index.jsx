import React from "react";
import { ProductCarouselDisplay } from "./ProductCarouselDisplay";
import { ProductDescription } from "./ProductDescription";
import { RelatedProducts } from "./RelatedProducts";

export const MainProductDisplay = ({ singleProduct }) => {
  return (
    <div>
      <ProductCarouselDisplay singleProduct={singleProduct} />
      <RelatedProducts singleProduct={singleProduct} />
      <ProductDescription singleProduct={singleProduct} />
    </div>
  );
};
