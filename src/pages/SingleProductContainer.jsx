import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useChecResultContext } from "../Context/ChecContextProvider";
import {
  PriceDisplay,
  MainProductDisplay,
  LoaderSpinner,
  SingleProductNotFound,
} from "../components";

export const SingleProductContainer = () => {
  const { singleProduct, getSingleProduct, isSingleProductLoading } =
    useChecResultContext();

  let { productId } = useParams();
  useEffect(() => {
    getSingleProduct(productId);
    //eslint-disable-next-line
  }, []);

  if (isSingleProductLoading) {
    return (
      <div>
        <LoaderSpinner />
      </div>
    );
  }

  if (singleProduct === "404") {
    return <SingleProductNotFound />;
  }

  return (
    <section className="bg-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] lg:grid-cols-[1fr_325px] py-6 gap-6">
          <MainProductDisplay singleProduct={singleProduct} />
          <PriceDisplay singleProduct={singleProduct} />
        </div>
      </div>
    </section>
  );
};
