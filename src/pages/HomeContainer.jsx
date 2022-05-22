import React, { useEffect } from "react";
import { useChecResultContext } from "../Context/ChecContextProvider";
import {
  CheckOrderBanner,
  SideAdverts,
  MainCarousel,
  LogoCarousel,
  ProductsPreviews,
  ProductCard,
  LoaderSpinner,
} from "../components";

export const HomeContainer = () => {
  const { products, getProducts, categories, isProductsLoading } =
    useChecResultContext();

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
          <div className="grid pb-3 grid-cols-1 lg:grid-cols-[1fr,325px]">
            {isProductsLoading ? (
              <LoaderSpinner />
            ) : (
              <div>
                {categories.map((catergory) => (
                  <ProductsPreviews
                    key={catergory}
                    labelText={displayTextLabel(catergory)}
                  >
                    {products
                      ?.filter(
                        (product) => product?.categories[0]?.slug === catergory
                      )
                      ?.slice(0, 3)
                      .map((item) => (
                        <div key={item.id}>
                          <div className="h-full">
                            <ProductCard product={item} />
                          </div>
                        </div>
                      ))}
                  </ProductsPreviews>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
