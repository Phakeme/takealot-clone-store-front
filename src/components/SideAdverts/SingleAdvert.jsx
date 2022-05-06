import React from "react";
import { Link } from "react-router-dom";

export const SingleAdvert = ({ image, path, label }) => {
  return (
    <Link to={path}>
      <div className="mt-4 h-[343px] shadow border-4 border-white overflow-hidden">
        <img height="100%" src={image} alt={label} />
      </div>
    </Link>
  );
};
