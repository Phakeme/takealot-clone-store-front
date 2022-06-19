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

  if (isProductsLoading) return <LoaderSpinner />;

  let DisplayedProducts = ({ catergory, numOfColums = 3 }) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 lg:min-h-[280px]">
        {products
          ?.filter((product) => product?.categories[0]?.name === catergory.name)
          ?.slice(0, numOfColums)
          .map((item) => (
            <div key={item.id}>
              <div className="h-full">
                <ProductCard product={item} />
              </div>
            </div>
          ))}
      </div>
    );
  };

  return (
    <>
      <section className="container mx-auto" data-testid="home-page">
        <div className="grid grid-cols-1 lg:grid-cols-[198px,1fr,300px] gap-6 h-fit pb-2 md:h-[440px] mt-0 md:mt-5">
          <div className="hidden lg:block" />
          <div className="">
            <MainCarousel />
            <div className="flex flex-col">
              <h3 className="py-2 md:py-4 font-semibold text-center md:text-left">
                See My Other Portfolio Projects
              </h3>
              <LogoCarousel />
            </div>
          </div>
          <div className="hidden lg:block w-full relative">
            <CheckOrderBanner />
            {products && <SideAdverts />}
          </div>
        </div>
      </section>
      <section className="bg-gray-100 pb-4">
        <div className="container mx-auto">
          <div className="grid pb-3 grid-cols-1 lg:grid-cols-[1fr,325px]">
            {!products ? (
              <div className="bg-white border w-full h-[300px] flex items-center text-center justify-center mt-6 rounded">
                <div>
                  <h2 className="text-[20px] text-red-600 font-bold">
                    No Products Found
                  </h2>
                  <p className="text-sm">Please try agian later :(</p>
                </div>
              </div>
            ) : (
              <div>
                {categories.slice(0, 4).map((catergory, index) => {
                  if (catergory.products < 3) {
                    return null;
                  } else {
                    return (
                      <ProductsPreviews
                        key={index}
                        labelText={catergory?.description}
                        query={catergory?.name}
                      >
                        <div className="block xl:hidden">
                          <DisplayedProducts catergory={catergory} />
                        </div>
                        <div className="hidden xl:block">
                          <DisplayedProducts
                            catergory={catergory}
                            numOfColums={4}
                          />
                        </div>
                      </ProductsPreviews>
                    );
                  }
                })}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
