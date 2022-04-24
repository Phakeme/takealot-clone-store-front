import React from "react";
import { Link } from "react-router-dom";

export const NavLink = ({ path, label, key }) => {
  return (
    <Link to={path} key={key}>
      <div className="py-1 px-4 text-sm hover:text-blue hover:underline">
        {label}
      </div>
    </Link>
  );
};
