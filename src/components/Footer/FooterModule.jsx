import React from "react";
import { Link } from "react-router-dom";

export const FooterModule = ({ footerModule }) => {
  return (
    <div className="hidden lg:block">
      <h3 className="font-bold mb-2">{footerModule.title}</h3>
      <ul>
        {footerModule?.footerLinks?.map((item, index) => (
          <li
            key={index}
            className="text-sm hover:text-blue w-fit hover:underline"
          >
            <Link to="/deals">{item.textlabel}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
