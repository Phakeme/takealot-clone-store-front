import React from "react";
import { Link } from "react-router-dom";
import x from "../../images/x.svg";
import brandLogo from "../../images/takealot-logo.svg";

export const MobileSideBar = ({ handleCloseSide }) => {
  return (
    <div className="grid grid-cols-[256px,1fr] h-screen w-full absolute bg-black/70 z-20">
      <div className="bg-gray-100 w-64">
        <div className="pl-6 bg-white border-b border-gray-200 w-full h-16 flex items-center">
          <Link to="/">
            <img
              className=""
              width="120px"
              src={brandLogo}
              alt="codealot-brand"
            />
          </Link>
        </div>
      </div>
      <div className="p-4" onClick={() => handleCloseSide()}>
        <img src={x} height="auto" width="15px" alt="cancel-option" />
      </div>
    </div>
  );
};
