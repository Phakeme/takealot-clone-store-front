import React from "react";
import SearchWhiteIcon from "../../images/search-white-icon.svg";
import { SearchInput } from "../Utils/SearchInput";
import { OptionSelect } from "../mainHeader/OptionSelect";

export const SearchBox = ({ heroNavigations }) => {
  return (
    <div className="bg-white h-full rounded grid grid-cols-[1fr,50px] sm:grid-cols-[1fr,190px,50px] overflow-hidden text-sm">
      <SearchInput />
      <OptionSelect heroNavigations={heroNavigations} />
      <div className="bg-gray-800 h-full flex justify-center items-center cursor-pointer">
        <img width="15px" src={SearchWhiteIcon} alt="search-icon" />
      </div>
    </div>
  );
};
