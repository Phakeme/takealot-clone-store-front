import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PagesTopNavSingleLink } from "./PagesTopNavSingleLink";

import ArrowDown from "../../images/arrow-down.svg";
import ArrowUp from "../../images/arrow-up.svg";

export const MyAccounts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const data = [
    { label: "My Account", path: "/account" },
    { label: "Track Order", path: "/login" },
    { label: "Returns", path: "/login" },
    { label: "Credit & Refunds", path: "/login" },
    { label: "Products Reviews", path: "/login" },
    { label: "Invoices", path: "/login" },
    { label: "Personal Detailes", path: "/login" },
    { label: "Digital Libary", path: "/login" },
    { label: "Help", path: "/help" },
  ];
  const DropDownMenu = () => {
    return (
      <div className="absolute bg-white top-8 right-1 w-40 z-40 py-1 drop-shadow-md">
        <ul>
          {data.map(({ label, path }, index) => (
            <li key={index}>
              <PagesTopNavSingleLink label={label} path={path} />
            </li>
          ))}
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
      <Link to="/account">
        <div>My Account</div>
      </Link>
      <div className="pl-2 ">
        <img
          width="8px"
          height="auto"
          src={isOpen ? ArrowUp : ArrowDown}
          alt="My Account"
        />
      </div>
      {isOpen && <DropDownMenu />}
    </div>
  );
};
