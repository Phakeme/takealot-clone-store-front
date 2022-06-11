import React from "react";
import { CategoryTopNavSingleLink } from "./CategoryTopNavSingleLink";

export const CategoryTopNav = ({ heroNavigations }) => {
  return (
    <ul className="bg-gray-100 rounded h-full flex divide-x-2">
      {heroNavigations?.heroNavLinks?.slice(0, 5).map(({ label }, index) => (
        <CategoryTopNavSingleLink key={index} label={label} />
      ))}
    </ul>
  );
};
