import React, { useEffect, useState } from "react";
import commerce from "../lip/commerce";
import {
  CheckOrderBanner,
  SideAdverts,
  MainCarousel,
  LogoCarousel,
  ProductsPreviews,
} from "../components";

export const HomeContainer = () => {
  const [, setProducts] = useState([]);
  const fakeData = [
    { id: 1, label: "Product 1" },
    { id: 2, label: "Product 2" },
    { id: 3, label: "Product 3" },
  ];
  useEffect(() => {
    if (localStorage.getItem("products") === null) {
      commerce.products
        .list()
        .then((products) => {
          setProducts(products.data);
          localStorage.setItem("products", JSON.stringify(products.data));
        })
        .catch((error) => {
          console.log("There was an error fetching the products", error);
        });
    } else {
      setProducts(JSON.parse(localStorage.getItem("products")));
    }
  }, []);

  return (
    <>
      <section className="container mx-auto" data-testid="home-page">
        <div className="grid grid-cols-1 md:grid-cols-[1fr,300px] lg:grid-cols-[198px,1fr,300px] gap-6 h-[440px] mt-0 md:mt-5">
          <div className="hidden lg:block" />
          <div className="">
            <MainCarousel />
            <div className="flex flex-col">
              <h3 className="py-4 font-semibold">
                See My Other Portfolio Projects
              </h3>
              <LogoCarousel />
            </div>
          </div>
          <div className="hidden md:block w-full relative">
            <CheckOrderBanner />
            <SideAdverts />
          </div>
        </div>
      </section>
      <div className="bg-gray-100 pb-4">
        <div className="container mx-auto">
          <ProductsPreviews
            products={fakeData}
            labelText="Shop These Laptop Deals"
          />
          <ProductsPreviews
            products={fakeData}
            labelText="Shop These Laptop Deals"
          />
          <ProductsPreviews
            products={fakeData}
            labelText="Shop These Laptop Deals"
          />
          <ProductsPreviews
            products={fakeData}
            labelText="Shop These Laptop Deals"
          />
        </div>
      </div>
    </>
  );
};
