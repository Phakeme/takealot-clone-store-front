import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import x from "../../../images/x.svg";
import brandLogo from "../../../images/branding/codealot-logo.svg";
import user from "../../../images/user.svg";
import { MobiNavLink } from "./MobiNavLink";
import { closeSideBar } from "../../../features/sideBar/sidebarIsOpenSlice";

export const MobileSideBar = () => {
  const [navigations, setNavigations] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("/navigations")
      .then(function (response) {
        setNavigations(response.data);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, []);

  return (
    <div className="grid grid-cols-[276px,1fr] h-screen w-full bg-black/70 z-30 fixed top-0">
      <div className="bg-gray-100 w-full">
        <div
          className="pl-6 bg-white border-b border-gray-200 w-full h-16 flex items-center"
          onClick={() => dispatch(closeSideBar())}
        >
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
              <MobiNavLink path={path} label={label} icon={icon} />
            </div>
          ))}
        </div>

        <div className="bg-white flex items-center justify-center p-2 text-sm border-b border-gray-200 mt-4">
          <Link to="/login">
            <div
              onClick={() => dispatch(closeSideBar())}
              className="bg-blue text-white py-2 px-4 flex items-center justify-center rounded-3xl"
            >
              <img width="16px" src={user} alt="user-icon" />
              <div className="ml-2">Login</div>
            </div>
          </Link>
          <Link to="/login">
            <div
              className="ml-3 text-blue p-1"
              onClick={() => dispatch(closeSideBar())}
            >
              Register
            </div>
          </Link>
        </div>
      </div>

      <div className="p-4" onClick={() => dispatch(closeSideBar())}>
        <img src={x} height="auto" width="15px" alt="cancel-option" />
      </div>
    </div>
  );
};
