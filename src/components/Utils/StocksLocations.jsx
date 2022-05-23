import React from "react";

export const StocksLocations = () => {
  return (
    <div className="flex items-center my-3">
      <span className="font-bold">In stock</span>
      <div className="mx-2 grid grid-cols-2 gap-2">
        <div className="flex justify-center items-center p-1 bg-gray-100">
          <span className="text-xs font-bold">JHB</span>
        </div>
        <div className="flex justify-center items-center p-1 bg-gray-100">
          <span className="text-xs font-bold">CPT</span>
        </div>
      </div>
    </div>
  );
};
