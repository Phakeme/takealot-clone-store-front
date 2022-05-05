import React from "react";

export const OptionSelect = ({ heroNavigations }) => {
  return (
    <div className="relative w-full z-10">
      <div className="absolute w-full h-full">
        <select
          id="pet-select"
          className="w-full h-full px-2 outline-hidden focus:outline-none bg-gray-100 cursor-pointer"
        >
          <option value="">All Departments</option>
          {heroNavigations?.heroNavLinks?.map(({ label }, i) => (
            <option className="" key={i} value={label}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
