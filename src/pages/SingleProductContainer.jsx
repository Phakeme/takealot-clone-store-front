import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useChecResultContext } from "../Context/ChecContextProvider";

export const SingleProductContainer = () => {
  const { singleProduct, getSingleProduct, isSingleProductLoading } =
    useChecResultContext();
  let { productId } = useParams();
  useEffect(() => {
    getSingleProduct(productId);
    //eslint-disable-next-line
  }, []);

  return (
    <section className="h-[700px] bg-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-[1fr_325px] pt-6 gap-6">
          <div className="bg-white border border-gray-200 p-6">
            {singleProduct?.name}
          </div>
          <div className="bg-white h-[260px] border border-gray-200 px-6 pt-4">
            <div className="">
              <h2 className="text-[35px] font-bold mb-0">
                {singleProduct?.price?.formatted_with_symbol}
              </h2>
              <div className="uppercase relative font-bold mb-8">
                <span className="text-xs absolute -top-1">Free Delivery</span>
              </div>
              <div className="text-xs mb-2">
                <p>eB209,990 Discovery Miles 209,990</p>
                <p>On Credit: R1,288 / month</p>
              </div>
              <div className="">
                <div className="bg-green-700 h-[39px] text-white mb-3 flex justify-center items-center">
                  Add to Cart
                </div>
                <div className="bg-gray-100 h-[39px] flex justify-center items-center">
                  Add to List
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
