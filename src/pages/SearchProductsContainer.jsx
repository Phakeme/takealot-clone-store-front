import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const SearchProductsContainer = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    axios
      .get("/hero-navigations")
      .then((response) => setCategories(response.data))
      .catch((error) => {
        //  console.log(error);
      });
  }, []);

  return (
    <section className="bg-gray-100">
      <div className="container mx-auto py-4">
        <div className="grid grid-cols-[314px_1fr] gap-6">
          <div className="bg-white border rounded py-1">
            <p className="text-sm py-2 pl-3 border-b">All Categories</p>
            {categories?.heroNavLinks?.map((item, index) => (
              <Link to="#">
                <p className="text-sm py-2 pl-6 hover:bg-gray-100" key={index}>
                  {item.label}
                </p>
              </Link>
            ))}
          </div>
          <div className="">Text</div>
        </div>
      </div>
    </section>
  );
};
