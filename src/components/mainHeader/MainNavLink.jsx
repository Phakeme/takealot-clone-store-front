import React from "react";
import { Link } from "react-router-dom";

export const MainNavLink = ({ label, path }) => {
  return (
    <li className="h-full hover:bg-gray-200 grow">
      <Link to={path}>
        <div className="flex items-center justify-center h-full">{label}</div>
      </Link>
    </li>
  );
};
