import React from "react";

export const Button = ({ LoadingState, icon, textLabel, bg, bgHover }) => {
  return (
    <div
      className={`${bg} hover:${bgHover} h-[39px] text-white mb-3 flex justify-center items-center hover:cursor-pointer text-sm`}
    >
      {LoadingState ? (
        <span>Loading...</span>
      ) : (
        <>
          <img
            className="mr-3"
            width="18px"
            src={icon}
            alt="black-shoping-cart"
          />
          <span>{textLabel}</span>
        </>
      )}
    </div>
  );
};
