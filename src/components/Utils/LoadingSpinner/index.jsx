import React from "react";
import "./style.css";

export const LoadingSpinner = () => {
  return (
    <div className="lds-ring ">
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
