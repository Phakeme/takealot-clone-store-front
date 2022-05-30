import React from "react";

export const SearchInput = ({ setTextQuery }) => {
  return (
    <div className="flex h-full">
      <input
        className="w-full h-full p-1 pl-2 outline-none"
        type="search"
        id="site-search"
        name="q"
        autoComplete="off"
        placeholder="Search for products, brands..."
        onChange={(e) => setTextQuery(e.target.value)}
      />
    </div>
  );
};
