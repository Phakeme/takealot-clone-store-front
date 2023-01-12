// import { PagesTopNavSingleLink } from "./PagesTopNavSingleLink";

import { PagesTopNavSingleLink } from "./PagesTopNavSingleLink";
import React from 'react'

const DropDownMenu = () => {
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
  )
}

export default DropDownMenu