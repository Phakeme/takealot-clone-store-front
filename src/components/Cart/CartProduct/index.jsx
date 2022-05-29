import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { StocksLocations } from "../../Utils/StocksLocations";
import HeartIcon from "../../../images/Cart/gray-heart.svg";
import BinIcon from "../../../images/Cart/trash.svg";
import { CartAction } from "./CartAction";
import { Button } from "../../Utils/Button";
import CartIcon from "../../../images/shopping-cart.svg";
import { useChecResultContext } from "../../../Context/ChecContextProvider";

export const CartProduct = ({ product }) => {
  const location = useLocation();

  const isCartURL = location.pathname === "/cart";

  const {
    removeFromCart,
    moveWishList,
    updateCart,
    addToCart,
    deleteFromWishlist,
  } = useChecResultContext();

  const handleChange = (e) => {
    updateCart(product.id, e.target.value);
  };

  const handleAddToWishList = (product) => {
    moveWishList(product);
    removeFromCart(product?.id);
  };

  return (
    <div className="h-fit lg:h-[191px] bg-white p-6 border border-gray-200  rounded mb-3 md:mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] lg:grid-cols-[140px_1fr] gap-6 h-full">
        <Link to={`/product/${product?.product_id}`}>
          <div className="h-full flex justify-center items-center p-2 border-2 sm:border-none">
            <img
              className="w-full h-auto"
              src={product?.image?.url}
              alt="cart-product"
            />
          </div>
        </Link>
        <div className="flex flex-col justify-between">
          <div className="flex justify-between">
            <div>
              <Link to={`/product/${product?.product_id}`}>
                <h2 className="hidden lg:block">
                  {product?.name.slice(0, 60)}...
                </h2>
                <h2 className="block lg:hidden">
                  {product?.name.slice(0, 30)}...
                </h2>
                <span className="text-xs text-gray-400">
                  Promotion Applied: Massive Sale
                </span>
              </Link>
              <div>
                <StocksLocations />
              </div>
            </div>
            <div className="">
              <div className="text-[18px] text-right font-bold mb-3">
                <span>
                  {product?.line_total?.formatted_with_symbol?.split(".")[0]}
                </span>
              </div>
              {isCartURL && (
                <div className="flex">
                  <div className="mr-3 text-sm">Qty:</div>
                  <div>
                    <select
                      value={15}
                      onChange={(e) => handleChange(e)}
                      id="quantity-select"
                      className="w-full h-full px-2 outline-hidden focus:outline-none cursor-pointer border-b-2"
                    >
                      <option value={product.quantity}>
                        {product.quantity}
                      </option>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
                        if (product.quantity === item) {
                          return null;
                        } else {
                          return (
                            <option key={index} value={item}>
                              {item}
                            </option>
                          );
                        }
                      })}
                    </select>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
            <div className="text-xs bg-gray-100 border-2 px-2 py-1 rounded w-fit h-fit border-dashed hidden xl:block">
              Eligible for Cash on Delivery
            </div>
            <div className="flex text-sm items-center justify-end">
              {isCartURL ? (
                <>
                  <button onClick={() => removeFromCart(product?.id)}>
                    <CartAction textLabel="Remove" icon={BinIcon} />
                  </button>
                  <button onClick={() => handleAddToWishList(product)}>
                    <CartAction textLabel="Move to list" icon={HeartIcon} />
                  </button>
                </>
              ) : (
                <div className="grid gap-2 grid-cols-2 w-[360px]">
                  <div onClick={() => deleteFromWishlist(product?.product_id)}>
                    <Button
                      LoadingState=""
                      icon={CartIcon}
                      bg="bg-red-700"
                      bgHover="bg-red-800"
                      textLabel="Remove from list"
                    />
                  </div>
                  <div onClick={() => addToCart(product?.product_id)}>
                    <Button
                      icon={CartIcon}
                      bg="bg-green-700"
                      bgHover="bg-green-800"
                      textLabel="+ Add to Cart"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
