import React, { Suspense, lazy, useState } from "react";

import ArrowDown from "../../images/arrow-down.svg";
import ArrowUp from "../../images/arrow-up.svg";
import { Link } from "react-router-dom";

const DropDownMenu = lazy(() => import("./DropDownMenu"))

export const MyAccounts = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      {isOpen && (
      <Suspense fallback={React.Fragment}>
        <DropDownMenu />
      </Suspense>
      )}
    </div>
  );
};
