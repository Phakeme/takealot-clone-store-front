import {
  EmptyItems,
  LoaderSpinner,
} from "../components";

import { CartProduct } from "../modules/cart/components/CartProduct";
import { CartProductItem } from "../modules/cart/types/types";
import { CartSummary } from "../modules/cart/components/CartSummary"
import { CartSummaryInfo } from "../modules/cart/components/CartSummaryInfo"
import EmptyCart from "../images/Cart/empty-cart.svg";
import React from "react";
import { useCartResultContext } from "../modules/cart/api/CartContextProvider";

export const CartContainer = () => {
  const { cart, isCartLoading } = useCartResultContext();

  if (isCartLoading) {
    return (
      <section className="bg-gray-100">
        <LoaderSpinner />
      </section>
    );
  }
  if (cart?.line_items?.length === 0) {
    return (
      <EmptyItems
        pagetitle="Shopping Cart"
        icon={EmptyCart}
        textLabel="Your shopping cart is empty"
      />
    );
  } else if (cart?.line_items?.length > 0) {
    return (
      <section className="bg-gray-100">
        <div className="container mx-auto py-3">
          <h1 className="font-bold text-[20px] pb-5">Shopping Cart</h1>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_325px] gap-1 lg:gap-6">
            <div className="">
              <div className="h-fit">
                {cart?.line_items?.map((product: CartProductItem) => (
                  <CartProduct key={product?.id} product={product} />
                ))}
              </div>
              <h3 className="text-gray-700 text-sm mb-3 mt-6 lg:mt-0 w-fit text-center md:text-left">
                Placing an item in your shopping cart does not reserve that item
                or price. We only reserve stock for your order once payment is
                received.
              </h3>
            </div>
            <div>
              <CartSummary total_items={cart?.total_items} subtotal={cart?.subtotal?.formatted_with_symbol?.split(".")[0]} />
              <CartSummaryInfo />
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return <section className="h-[450px] bg-gray-100" />;
  }
};
