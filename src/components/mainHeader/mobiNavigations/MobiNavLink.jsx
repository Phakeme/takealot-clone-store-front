import { Link } from "react-router-dom";
import React from "react";
import { closeSideBar } from "../../../features/sideBar/sidebarIsOpenSlice";
import { useCartResultContext } from "../../../modules/cart/api/CartContextProvider";
import { useDispatch } from "react-redux";

export const MobiNavLink = ({ path, label, icon = null }) => {
  const { cart } = useCartResultContext();
  const dispatch = useDispatch();
  const cartLink = label === "Cart";

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
            {cartLink && <div>{cart?.line_items?.length} items</div>}
          </div>
        )}
      </div>
    </Link>
  );
};
