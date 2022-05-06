import axios from "axios";
import React, { useEffect, useState } from "react";
import { SingleAdvert } from "./SingleAdvert";
export const SideAdverts = () => {
  const [adverts, setAdverts] = useState(null);

  useEffect(() => {
    axios.get("/adverts").then((response) => setAdverts(response.data));
  }, []);

  return (
    <div className="absolute w-full">
      {adverts?.map(({ label, path, image }, index) => (
        <SingleAdvert key={index} label={label} path={path} image={image} />
      ))}
    </div>
  );
};
