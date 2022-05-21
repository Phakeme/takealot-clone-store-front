import React from "react";

export const ProductDescription = ({ singleProduct }) => {
  return (
    <div className="mt-6 bg-white border border-gray-200 p-6 rounded">
      <h2 className="font-bold mb-3">Description</h2>
      <div
        className="text-sm leading-relaxed"
        dangerouslySetInnerHTML={{
          __html: singleProduct?.description,
        }}
      ></div>
    </div>
  );
};
