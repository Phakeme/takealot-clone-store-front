import React from "react";
import "./style.css";

export const LoaderSpinner = () => {
  return (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
