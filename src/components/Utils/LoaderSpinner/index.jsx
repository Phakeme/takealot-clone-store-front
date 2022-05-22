import React from "react";
import "./style.css";

export const LoaderSpinner = () => {
  return (
    <div>
      <div className="flex justify-center items-center  pt-7 lg:pt-2 h-[300px] lg:h-[700px]">
        <div className="lds-ring ">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
