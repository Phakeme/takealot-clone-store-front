import React, { createContext, useContext, useState } from "react";

import commerce from "../lip/commerce";

const ChecResultContext = createContext();

export const ChecContextProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);
  const [isProductsLoading, setIsProductsLoading] = useState(false);
  const [singleProduct, setSingleProduct] = useState(null);
  const [isSingleProductLoading, setIsSingleProductLoading] = useState(true);
  const [isWishlistLoading, setIsWishlistLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const deleteFromWishlist = (productId) => {
    setIsWishlistLoading(true);
    let currentList = JSON.parse(localStorage.getItem("wishList"));
    let newList = currentList.filter(
      ({ product_id }) => product_id !== productId
    );

    localStorage.setItem("wishList", JSON.stringify(newList));
    setTimeout(() => setIsWishlistLoading(false), 1000);
  };

  const moveWishList = (product) => {
    setIsLoading(true);
    let currentList = JSON.parse(localStorage.getItem("wishList"));

    if (currentList === null) {
      localStorage.setItem("wishList", JSON.stringify([product]));
      setIsLoading(false);
      return;
    }

    for (let i = 0; i < currentList.length; i++) {
      if (currentList[i].id === product.id) {
        setIsLoading(false);
        alert(`${product.name} is already in the wish list`);
        return;
      }
    }
    currentList.push(product);
    localStorage.setItem("wishList", JSON.stringify(currentList));
    setIsLoading(false);
  };

  const getProducts = () => {
    setIsProductsLoading(true);

    let getLocalStoredCategories = JSON.parse(
      localStorage.getItem("categories")
    );

    // Retrieve categories and save them in a LocalStorage
    if (!getLocalStoredCategories) {
      commerce.categories.list().then((response) => {
        if (response.data) {
          localStorage.setItem("categories", JSON.stringify(response.data));
          setCategories(response.data);
        } else {
          console.log("No categories found from the server!");
        }
      });
    } else {
      setCategories(getLocalStoredCategories);
    }

    commerce.products
      .list()
      .then((response) => {
        if (response.data) {
          setProducts(response.data);
        } else {
          console.log("no products were found from the server");
        }
        setIsProductsLoading(false);
      })
      .catch((error) => {
        console.log("There was an error fetching the products", error);
        setIsProductsLoading(false);
      });
  };

  // Retrieve a product by it's ID
  const getSingleProduct = (productId) => {
    setIsSingleProductLoading(true);
    commerce.products
      .retrieve(productId)
      .then((response) => {
        setSingleProduct(response);
        setIsSingleProductLoading(false);
      })
      .catch((error) => {
        console.log("There was an error fetching the products", error);
        setSingleProduct("404");
        setIsSingleProductLoading(false);
      });
  };

  // Retrieve a product by query
  const queryProduct = (query) => {
    if (query.trim().length < 1) return;
    query = query.split(" ")[0].toLowerCase();
    setIsLoading(true);
    commerce.products
      .list({
        query: query.trim(),
      })
      .then((response) => {
        if (response.data) {
          console.log(response.data);
          localStorage.setItem(
            "productsFromQuery",
            JSON.stringify(response.data)
          );
        } else {
          localStorage.setItem("productsFromQuery", null);
        }
        localStorage.setItem("searchTerm", JSON.stringify(query));
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("There was an error fetching the products", error);
        setIsLoading(false);
      });
    // Returns all products that contains the string in either the product name or permalink
  };

  return (
    <ChecResultContext.Provider
      value={{
        getProducts,
        products,
        categories,
        getSingleProduct,
        isProductsLoading,
        singleProduct,
        isSingleProductLoading,
        moveWishList,
        isLoading,
        deleteFromWishlist,
        isWishlistLoading,
        queryProduct,
      }}
    >
      {children}
    </ChecResultContext.Provider>
  );
};

export const useChecResultContext = () => useContext(ChecResultContext);
