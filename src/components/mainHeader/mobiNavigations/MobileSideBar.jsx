import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MobiNavLink } from "./MobiNavLink";
import x from "../../../images/x.svg";
import brandLogo from "../../../images/takealot-logo.svg";
import user from "../../../images/user.svg";

export const MobileSideBar = ({ handleCloseSide }) => {
  const [navigations, setNavigations] = useState(false);
  useEffect(() => {
    axios.get("/navigations").then(function (response) {
      setNavigations(response.data);
    });
  }, []);

  return (
    <div className="grid grid-cols-[276px,1fr] h-screen w-full absolute bg-black/70 z-20">
      <div className="bg-gray-100 w-full">
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
        <div className="mt-4">
          {navigations?.navLinks?.map(({ path, label, icon }, index) => (
            <div key={index}>
              <MobiNavLink
                path={path}
                label={label}
                icon={icon}
                handleCloseSide={handleCloseSide}
              />
            </div>
          ))}
        </div>

        <div className="bg-white flex items-center justify-center p-2 text-sm border-b border-gray-200 mt-4">
          <Link to="/login">
            <div
              className="bg-blue text-white py-2 px-4 flex items-center justify-center rounded-3xl"
              onClick={() => handleCloseSide()}
            >
              <img width="16px" src={user} alt="user-icon" />
              <div className="ml-2">Login</div>
            </div>
          </Link>
          <Link to="/signup">
            <div
              className="ml-3 text-blue p-1"
              onClick={() => handleCloseSide()}
            >
              Register
            </div>
          </Link>
        </div>
      </div>

      <div className="p-4" onClick={() => handleCloseSide()}>
        <img src={x} height="auto" width="15px" alt="cancel-option" />
      </div>
    </div>
  );
};
