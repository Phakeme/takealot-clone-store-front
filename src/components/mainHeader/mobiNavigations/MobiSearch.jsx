import React from "react";
import { SearchBox } from "../../SearchBox";

export const MobiSearch = ({ setIsSearchFormOpen }) => {
  return (
    <div className="h-full  flex justify-between py-3">
      <div className="w-full mr-3 bg-gray-100 border">
        <SearchBox />
      </div>
      <div
        className=" w-[100px] flex items-center justify-center text-sm font-bold cursor-pointer bg-gray-100"
        onClick={() => setIsSearchFormOpen(false)}
      >
        <span className="w-full h-full flex justify-center items-center">
          CANCEL
        </span>
      </div>
    </div>
  );
};
