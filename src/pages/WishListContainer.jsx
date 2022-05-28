import React from "react";
import {
  CreateWishList,
  PageTitle,
  Wishlist,
  CartProduct,
} from "../components";

export const WishListContainer = () => {
  const wishlistProducts = JSON.parse(localStorage.getItem("wishList"));
  return (
    <section className="bg-gray-100 py-6">
      <div className="container mx-auto">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-[325px_1fr]">
          <CreateWishList />
          <div>
            <PageTitle titeLabel="Wish List" />
            <Wishlist>
              {wishlistProducts?.map((product) => (
                <CartProduct key={product?.id} product={product} />
              ))}
            </Wishlist>
          </div>
        </div>
      </div>
    </section>
  );
};
