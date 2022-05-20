import React, { createContext, useContext, useState } from "react";
import commerce from "../lip/commerce";
const ChecResultContext = createContext();

export const ChecContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isProductsLoading, setIsProductsLoading] = useState(false);
  const [singleProduct, setSingleProduct] = useState(null);
  const [isSingleProductLoading, setIsSingleProductLoading] = useState(false);

  // Save Catergories in an Array State
  const createCatergories = (products) => {
    products.map((item) => {
      if (!categories?.includes(item.categories[0].slug)) {
        // console.log(item.categories[0].slug);
        categories.push(item.categories[0].slug);
      }
      return setCategories(categories);
    });
  };

  const getProducts = () => {
    setIsProductsLoading(true);
    if (localStorage.getItem("products") === null) {
      commerce.products
        .list()
        .then((products) => {
          setProducts(products.data);
          localStorage.setItem("products", JSON.stringify(products.data));
          if (products.data) {
            createCatergories(products.data);
          }
          setIsProductsLoading(false);
        })
        .catch((error) => {
          console.log("There was an error fetching the products", error);
          setIsProductsLoading(false);
        });
    } else {
      setProducts(JSON.parse(localStorage.getItem("products")));
      if (products) {
        createCatergories(JSON.parse(localStorage.getItem("products")));
      }
      setIsProductsLoading(false);
    }
  };

  // Retrieve a product by it's ID
  const getSingleProduct = (productId) => {
    setIsSingleProductLoading(true);
    const localProductId = JSON.parse(localStorage.getItem("singleProduct")).id;

    if (
      (localStorage.getItem("singleProduct") === null) |
      (localProductId !== productId)
    ) {
      commerce.products
        .retrieve(productId)
        .then((response) => {
          setSingleProduct(response);
          setIsSingleProductLoading(false);
          if (response) {
            localStorage.setItem("singleProduct", JSON.stringify(response));
          }
        })
        .catch((error) => {
          console.log("There was an error fetching the products", error);
          setIsSingleProductLoading(false);
        });
    } else {
      setSingleProduct(JSON.parse(localStorage.getItem("singleProduct")));
      setIsSingleProductLoading(false);
    }
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
      }}
    >
      {children}
    </ChecResultContext.Provider>
  );
};

export const useChecResultContext = () => useContext(ChecResultContext);
