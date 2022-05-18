import React from "react";

export const ProductContainer = () => {
  return (
    <section className="h-[700px] bg-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-[1fr_325px] pt-6 gap-6">
          <div className="bg-white border border-gray-200 p-6">
            ProductContainer
          </div>
          <div className="bg-white h-[260px] border border-gray-200 p-6">
            ProductContainer
          </div>
        </div>
      </div>
    </section>
  );
};
