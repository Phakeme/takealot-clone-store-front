import React, { createContext, useContext, useEffect, useState } from "react";

import commerce from "../../../lip/commerce";

const CartResultContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [isCartLoading, setIsCartLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useState({});
  const [movingItem, setMovingItem] = useState(null);
  const [successCart, setSuccessCart] = useState(false);

  useEffect(() => {
    if (successCart === false) return;
    setTimeout(() => {
      setSuccessCart(false);
    }, 5000);
  }, [successCart]);

  useEffect(() => {
    setIsCartLoading(true);
    commerce.cart
      .retrieve()
      .then((cart) => {
        setCart(cart);
        setIsCartLoading(false);
      })
      .catch((error) => {
        setIsCartLoading(false);
      });
  }, []);

  const removeFromCart = (productId) => {
    setIsCartLoading(true);
    setMovingItem(productId);
    commerce.cart
      .remove(productId)
      .then(({ cart }) => {
        setCart(cart);
        console.log(cart, "Removed from Cart");
        setIsCartLoading(false);
      })
      .catch((error) => {
        setIsCartLoading(false);
      });
    setMovingItem(null);
  };

  const updateCart = (productId, value) => {
    commerce.cart.update(productId, { quantity: value }).then(({ cart }) => {
      setCart(cart);
      console.log(cart, "Removed from Cart");
    });
  };

  const addToCart = (productId) => {
    setIsCartLoading(true);
    setIsLoading(true);

    commerce.cart
      .add(productId, 1)
      .then(({ cart }) => {
        setIsCartLoading(false);
        setIsLoading(false);
        setCart(cart, console.log(cart, "AddToCart Cart"));
        setSuccessCart(true);
      })
      .catch(({ data }) => {
        setIsCartLoading(false);
        setIsLoading(false);
      });
  };

  return (
    <CartResultContext.Provider
      value={{
        addToCart,
        isCartLoading,
        cart,
        removeFromCart,
        updateCart,
        isLoading,
        movingItem,
        successCart,
      }}
    >
      {children}
    </CartResultContext.Provider>
  );
};

export const useCartResultContext = () => useContext(CartResultContext);
