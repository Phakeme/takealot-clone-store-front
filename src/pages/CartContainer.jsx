import React from "react";
import { Link } from "react-router-dom";
import EmptyIcon from "../images/Cart/empty-cart.svg";
import { useChecResultContext } from "../Context/ChecContextProvider";
import {
  CartSummary,
  CartSummaryInfo,
  CartProduct,
  LoaderSpinner,
  PageTitle,
} from "../components";

export const CartContainer = () => {
  const { cart, isCartLoading } = useChecResultContext();
  console.log(isCartLoading, "isCartLoading");
  if (isCartLoading) {
    return (
      <section className="bg-gray-100">
        <LoaderSpinner />
      </section>
    );
  }
  if (cart?.line_items?.length === 0) {
    return (
      <section className="bg-gray-100 pb-[30px] lg:pb-[60px]">
        <div className="container mx-auto pt-3">
          <PageTitle titeLabel="Shopping Cart" />
          <div className="bg-white rounded h-[331px] flex items-center justify-center">
            <div className="flex justify-center flex-col items-center">
              <div className="rounded-full bg-red-100 overflow-hidden border-8 border-white drop-shadow-lg w-[110px] mb-6">
                <img src={EmptyIcon} alt="empty-cart" />
              </div>
              <p className="">Your shopping cart is empty</p>
              <div className="mt-6">
                <Link to="/">
                  <div className="bg-blue text-white  text-sm  h-[39px] flex justify-center items-center hover:cursor-pointer drop-shadow-lg px-4 rounded">
                    Continue shopping
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else if (cart?.line_items?.length > 0) {
    return (
      <section className="bg-gray-100">
        <div className="container mx-auto py-3">
          <h1 className="font-bold text-[20px] pb-5">Shopping Cart</h1>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_325px] gap-1 lg:gap-6">
            <div>
              {cart?.line_items?.map((product, index) => (
                <CartProduct key={product?.id} product={product} />
              ))}
            </div>
            <div>
              <CartSummary cart={cart} />
              <CartSummaryInfo />
            </div>
          </div>
          <h3 className="text-gray-700 text-sm mb-3 mt-6 lg:mt-0 w-fit text-center md:text-left">
            Placing an item in your shopping cart does not reserve that item or
            price. We only reserve stock for your order once payment is
            received.
          </h3>
        </div>
      </section>
    );
  } else {
    return <section className="h-[450px] bg-gray-100" />;
  }
};
