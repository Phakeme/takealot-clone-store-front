import React, { useEffect } from "react";
import { useChecResultContext } from "../Context/ChecContextProvider";
import {
  CheckOrderBanner,
  SideAdverts,
  MainCarousel,
  LogoCarousel,
  ProductsPreviews,
} from "../components";

export const HomeContainer = () => {
  const { products, getProducts, categories } = useChecResultContext();
  // eslint-disable-next-line
  useEffect(() => getProducts(), []);

  const displayTextLabel = (textLabel) => {
    let dynamicLabel;
    switch (textLabel) {
      case "beauty":
        dynamicLabel = "Top Beauty Essentials";
        break;
      case "computers-electronics":
        dynamicLabel = "Shop These Electronics Deals";
        break;
      default:
        break;
    }
    return dynamicLabel;
  };

  return (
    <>
      <section className="container mx-auto" data-testid="home-page">
        <div className="grid grid-cols-1  lg:grid-cols-[198px,1fr,300px] gap-6 h-[440px] mt-0 md:mt-5">
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
          <div className="hidden lg:block w-full relative">
            <CheckOrderBanner />
            <SideAdverts />
          </div>
        </div>
      </section>
      <section className="bg-gray-100 pb-4">
        <div className="container mx-auto">
          {categories.map((catergory) => (
            <ProductsPreviews
              key={catergory}
              products={products?.filter(
                (product) => product?.categories[0]?.slug === catergory
              )}
              labelText={displayTextLabel(catergory)}
            />
          ))}
        </div>
      </section>
    </>
  );
};
