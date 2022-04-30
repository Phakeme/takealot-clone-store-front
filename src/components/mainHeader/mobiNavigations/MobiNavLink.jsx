import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { closeSideBar } from "../../../features/sideBar/sidebarIsOpenSlice";

export const MobiNavLink = ({ path, label, icon = null }) => {
  const dispatch = useDispatch();
  const cart = label === "Cart";

  return (
    <Link to={path}>
      <div
        onClick={() => dispatch(closeSideBar())}
        className="pl-6 bg-white border-b border-gray-200 h-12 flex items-center text-sm"
      >
        {!icon ? (
          label
        ) : (
          <div className="flex items-center justify-between w-full pr-6">
            <div className="flex items-center ">
              {icon ? (
                <div className="mr-5">
                  <img width="18px" src={icon} alt="" />
                </div>
              ) : null}
              <div>{label}</div>
            </div>
            {cart && <div>0 items</div>}
          </div>
        )}
      </div>
    </Link>
  );
};
