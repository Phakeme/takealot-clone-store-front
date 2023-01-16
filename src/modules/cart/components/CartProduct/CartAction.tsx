import React from "react";

interface Props{
  icon: any
  textLabel: string
}

export const CartAction: React.FC<Props> = ({ icon, textLabel }) => {
  return (
    <div className="flex px-2 py-1 rounded hover:cursor-pointer hover:bg-gray-100 ml-0 sm:ml-3 mr-3 sm:mr-0 border sm:border-none">
      <div className="ms:mr-3 mr-2">
        <img className="w-[18px]" src={icon} alt="icon" />
      </div>
      <span>{textLabel}</span>
    </div>
  );
};
