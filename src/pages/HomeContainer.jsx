import React, { useEffect } from "react";
import {
  CheckOrderBanner,
  SideAdverts,
  MainCarousel,
  LogoCarousel,
} from "../components";
import { fetchProducts } from "../features/products/productsSlice";
import { useSelector, useDispatch } from "react-redux";

export const HomeContainer = () => {
  const products = useSelector((state) => state.appProducts.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
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
      <div className="bg-gray-100 h-72">test</div>
    </>
  );
};
