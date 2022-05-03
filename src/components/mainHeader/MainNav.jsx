import React from "react";

export const MainNav = ({ children }) => {
  return (
    <ul className="bg-gray-100 rounded h-full flex divide-x-2">{children}</ul>
  );
};
