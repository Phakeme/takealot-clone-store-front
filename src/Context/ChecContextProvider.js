import React, { createContext, useContext, useState, useEffect } from "react";
import commerce from "../lip/commerce";
const ChecResultContext = createContext();

export const ChecContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isProductsLoading, setIsProductsLoading] = useState(true);
  const [singleProduct, setSingleProduct] = useState(null);
  const [isSingleProductLoading, setIsSingleProductLoading] = useState(false);
  const [isCartLoading, setIsCartLoading] = useState(false);
  const [cart, setCart] = useState({});
  // const [wishList, setWishList] = useState([]);

  useEffect(() => {
    commerce.cart.retrieve().then((cart) => setCart(cart));
    // setWishList(JSON.parse(localStorage.getItem("wishList")));
  }, []);

  const removeFromCart = (productId) => {
    setIsCartLoading(true);
    commerce.cart.remove(productId).then(({ cart }) => {
      setCart(cart);
      console.log(cart, "Removed from Cart");
    });
  };

  const updateCart = (productId, value) => {
    commerce.cart.update(productId, { quantity: value }).then(({ cart }) => {
      setCart(cart);
      console.log(cart, "Removed from Cart");
    });
  };

  const moveWishList = (product) => {
    let currentList = JSON.parse(localStorage.getItem("wishList"));

    if (currentList === null) {
      localStorage.setItem("wishList", JSON.stringify([product]));
      return;
    }

    for (let i = 0; i < currentList.length; i++) {
      if (currentList[i].id === product.id) {
        alert(`${product.name} is already in the wish list`);
        return;
      }
    }
    currentList.push(product);
    localStorage.setItem("wishList", JSON.stringify(currentList));
    removeFromCart(product.id);
  };

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
    let localProductId = JSON.parse(localStorage.getItem("singleProduct"));

    if (localProductId !== null) localProductId = localProductId.id;

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

  const addToCart = (productId) => {
    setIsCartLoading(true);
    commerce.cart
      .add(productId, 1)
      .then(({ cart }) => {
        setIsCartLoading(false);
        setCart(cart, console.log(cart, "AddToCart Cart"));
      })
      .catch(({ data }) => {
        setIsCartLoading(false);
      });
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
        addToCart,
        isCartLoading,
        cart,
        removeFromCart,
        updateCart,
        moveWishList,
      }}
    >
      {children}
    </ChecResultContext.Provider>
  );
};

export const useChecResultContext = () => useContext(ChecResultContext);
