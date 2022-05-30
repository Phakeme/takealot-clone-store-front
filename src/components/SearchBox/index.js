import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchWhiteIcon from "../../images/search-white-icon.svg";
import { SearchInput } from "../Utils/SearchInput";
import { OptionSelect } from "../mainHeader/OptionSelect";
import { useChecResultContext } from "../../Context/ChecContextProvider";

export const SearchBox = ({ heroNavigations }) => {
  let navigate = useNavigate();
  const { queryProduct } = useChecResultContext();
  const [textQuery, setTextQuery] = useState("");

  const handleSubmit = (e) => {
    if (textQuery.trim().length < 1) return;
    //listens for you to press the ENTER key,
    if (e.keyCode === 13) {
      queryProduct(textQuery);
      navigate("/results", { replace: true });
    }
    //listens for you to click the Submit button,
    if (e.type === "click") {
      queryProduct(textQuery);
      navigate("/results", { replace: true });
    }
  };

  return (
    <div
      className="bg-white h-full rounded grid grid-cols-[1fr,50px] sm:grid-cols-[1fr,190px,50px] overflow-hidden text-sm"
      onKeyDown={(e) => handleSubmit(e)}
    >
      <SearchInput setTextQuery={setTextQuery} />
      <OptionSelect heroNavigations={heroNavigations} />
      <div
        className="bg-gray-800 h-full flex justify-center items-center cursor-pointer"
        onClick={(e) => handleSubmit(e)}
      >
        <img width="15px" src={SearchWhiteIcon} alt="search-icon" />
      </div>
    </div>
  );
};
