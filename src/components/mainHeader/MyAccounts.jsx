import React, { useState } from "react";

import ArrowDown from "../../images/arrow-down.svg";
import ArrowUp from "../../images/arrow-up.svg";

export const MyAccounts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const DropDownMenu = () => {
    return (
      <div className="absolute bg-white top-8 right-1 w-40 p-4 drop-shadow-md">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 2</li>
          <li>Item 2</li>
          <li>Item 2</li>
        </ul>
      </div>
    );
  };
  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="flex items-center justify-center p-2 cursor-pointer relative"
    >
      <div>My Account</div>
      <div className="pl-2 ">
        <img width="8px" src={isOpen ? ArrowUp : ArrowDown} alt="My Account" />
      </div>
      {isOpen && <DropDownMenu />}
    </div>
  );
};
