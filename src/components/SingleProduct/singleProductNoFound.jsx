import React from "react";
import { Link } from "react-router-dom";

export const SingleProductNotFound = () => {
  return (
    <section className="h-[300px] lg:h-[520px] text-white bg-blue">
      <div className="container mx-auto flex justify-center items-center h-full">
        <div className="p-2">
          <h1 className="text-[28px] md:text-[48px] font-bold leading-[30px] md:leading-[50px] md:mb-6 mb-1">
            Oops! <br />
            Page not found
          </h1>
          <p className="md:mb-3 mb-2">
            The link you were looking for no longer exists.
          </p>
          <p className="md:mb-6 mb-2">
            Head back to the Homepage and take a look at our deals.
          </p>
          <Link to="/">
            <div className="bg-white rounded px-4 py-3 text-blue w-fit text-sm font-bold">
              Back to Homepage
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
