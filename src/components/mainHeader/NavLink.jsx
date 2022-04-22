import React from "react";
import { Link } from "react-router-dom";

export const NavLink = ({ path, label }) => {
  return (
    <Link to={path}>
      <div className="py-2 px-4 text-sm hover:text-blue hover:underline">
        {label}
      </div>
    </Link>
  );
};
