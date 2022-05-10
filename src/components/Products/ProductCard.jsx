import React from "react";

export const ProductCard = () => {
  return (
    <div className="bg-white h-[344px] w-full">
      <div>
        <img
          loading="lazy"
          height="60%"
          src="https://pcinternational.co.za/wp-content/uploads/2022/04/msi-modern-14-b11m-11th-gen-core-i7-professional-laptop-1000px-v1-0001_uda2ul_ecud1x-300x300.jpg"
          alt="product"
        />
      </div>
      <div>description</div>
    </div>
  );
};
