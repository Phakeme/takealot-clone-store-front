import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProductCard, LoaderSpinner, EmptyItems } from "../components";
import { useChecResultContext } from "../Context/ChecContextProvider";
import NoItemsFoundIcon from "../images/search/no-item-found.svg";

export const SearchProductsContainer = () => {
  const [categories, setCategories] = useState(null);
  const { isLoading, queryProduct } = useChecResultContext();
  const products = JSON.parse(localStorage.getItem("productsFromQuery"));
  const searchTerm = JSON.parse(localStorage.getItem("searchTerm"));

  useEffect(() => {
    axios
      .get("/hero-navigations")
      .then((response) => setCategories(response.data))
      .catch((error) => {
        //  console.log(error);
      });
  }, []);

  if (isLoading) {
    return (
      <div>
        <LoaderSpinner />
      </div>
    );
  }

  let currentProductsView;
  if (products === null || !products) {
    currentProductsView = (
      <EmptyItems
        pagetitle={`No items found "${searchTerm}"`}
        icon={NoItemsFoundIcon}
        textLabel="Please check your spelling or try a more generic search term."
      />
    );
  } else {
    currentProductsView = (
      <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-2 md:gap-4">
        {products.map((product, index) => (
          <div key={index}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <section className="bg-gray-100">
      <div className="container mx-auto py-4">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[220px_1fr]">
          <div className="bg-white border rounded py-1 hidden lg:block">
            <p className="text-sm py-2 pl-3 border-b">All Categories</p>
            <ul>
              {categories?.heroNavLinks?.map((item, index) => (
                <li
                  key={index}
                  className="text-sm py-2 pl-6 hover:bg-gray-100 cursor-pointer"
                  onClick={() => queryProduct(item.label)}
                >
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            {products && (
              <h3 className="text-sm mb-3">
                {products?.length} results found for "{searchTerm}"
              </h3>
            )}
            <>{currentProductsView}</>
          </div>
        </div>
      </div>
    </section>
  );
};
