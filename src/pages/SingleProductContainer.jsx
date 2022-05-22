import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useChecResultContext } from "../Context/ChecContextProvider";
import { PriceDisplay, MainProductDisplay, LoaderSpinner } from "../components";

export const SingleProductContainer = () => {
  const { singleProduct, getSingleProduct, isSingleProductLoading } =
    useChecResultContext();

  let { productId } = useParams();
  useEffect(() => {
    getSingleProduct(productId);
    //eslint-disable-next-line
  }, []);

  return (
    <section className="bg-gray-100">
      <div className="container mx-auto">
        {isSingleProductLoading ? (
          <div>
            <LoaderSpinner />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] lg:grid-cols-[1fr_325px] py-6 gap-6">
            <MainProductDisplay singleProduct={singleProduct} />
            <PriceDisplay singleProduct={singleProduct} />
          </div>
        )}
      </div>
    </section>
  );
};
