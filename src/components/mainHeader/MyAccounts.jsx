import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "./NavLink";

import ArrowDown from "../../images/arrow-down.svg";
import ArrowUp from "../../images/arrow-up.svg";

export const MyAccounts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const data = [
    { label: "My Account", path: "#" },
    { label: "Track Order", path: "#" },
    { label: "Returns", path: "#" },
    { label: "Credit & Refunds", path: "#" },
    { label: "Products Reviews", path: "#" },
    { label: "Invoices", path: "#" },
    { label: "Personal Detailes", path: "#" },
    { label: "Digital Libary", path: "#" },
    { label: "Help", path: "/help" },
  ];
  const DropDownMenu = () => {
    return (
      <div className="absolute bg-white top-8 right-1 w-40 py-1 drop-shadow-md">
        <ul>
          {data.map(({ label, path }, index) => (
            <li key={index}>
              <NavLink label={label} path={path} />
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
