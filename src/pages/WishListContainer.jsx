import React from "react";
import EmptyIcon from "../images/Wishlist/empty-list.svg";
import {
  CreateWishList,
  PageTitle,
  Wishlist,
  CartProduct,
  LoaderSpinner,
  EmptyItems,
} from "../components";
import { useChecResultContext } from "../Context/ChecContextProvider";

export const WishListContainer = () => {
  const { isWishlistLoading } = useChecResultContext();
  if (isWishlistLoading) {
    return (
      <section className="bg-gray-100">
        <LoaderSpinner />
      </section>
    );
  }

  const wishlistProducts = JSON.parse(localStorage.getItem("wishList"));

  if (wishlistProducts?.length === 0 || wishlistProducts === null) {
    return (
      <EmptyItems
        pagetitle="Wish List"
        icon={EmptyIcon}
        textLabel="Your wish list is empty"
      />
    );
  }

  return (
    <section className="bg-gray-100 py-6">
      <div className="container mx-auto">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-[240px_1fr] lg:grid-cols-[325px_1fr]">
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
