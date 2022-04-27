import React from "react";
import { Link } from "react-router-dom";

export const MobiNavLink = ({ path, label }) => {
  return (
    <Link to={path}>
      <div className="pl-6 bg-white border-b border-gray-200 h-12 flex items-center text-sm">
        {label}
      </div>
    </Link>
  );
};
