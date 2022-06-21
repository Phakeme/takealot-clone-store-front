import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useChecResultContext } from "../../Context/ChecContextProvider";
export const SideAdverts = ({ numberOfCategories = 3 }) => {
  const [adverts, setAdverts] = useState(null);
  let navigate = useNavigate();
  const { queryProduct } = useChecResultContext();

  const handleSubmit = (textQuery) => {
    queryProduct(textQuery);
    navigate("/results", { replace: true });
  };

  useEffect(() => {
    axios
      .get("/adverts")
      .then((response) => setAdverts(response.data))
      .catch((error) => {
        //  console.log(error);
      });
  }, []);

  return (
    <div className="absolute w-full">
      {adverts?.slice(0, numberOfCategories).map(({ label, image }, index) => (
        <div
          onClick={() => handleSubmit(label)}
          key={index}
          className="mt-4 h-[343px] shadow border-4 border-white overflow-hidden cursor-pointer"
        >
          <img height="100%" src={image} alt={label} />
        </div>
      ))}
    </div>
  );
};
