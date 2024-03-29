import { AccountType } from "../../components/Account";
import {PageTitle} from "../../components/Utils/Typography/PageTitle"
import React from "react";

const MyAccountContainer = () => {
  const data = [
    {
      type: "Orders",
      icon: 'CartIcon',
      links: [
        { textLabel: "Orders", path: "/login" },
        { textLabel: "Invoices", path: "/login" },
        { textLabel: "Returns", path: "/login" },
        { textLabel: "Product Reviews", path: "/login" },
      ],
    },
    {
      type: "Payments & Credit",
      icon: 'CardIcon',
      links: [
        { textLabel: "Credit & Refunds", path: "/login" },
        { textLabel: "Redeem Gift Voucher", path: "/login" },
      ],
    },
    {
      type: "Digital Library",
      icon: 'DocumentIcon',
      links: [
        { textLabel: "eBook Digital Library", path: "/login" },
        { textLabel: "eBook Support", path: "/login" },
      ],
    },
    {
      type: "Customer Information",
      icon: 'UserIcon',
      links: [
        { textLabel: "Personal Details", path: "/login" },
        { textLabel: "Address Book", path: "/login" },
        { textLabel: "Newsletter Subscriptions", path: "/login" },
      ],
    },
    {
      type: "My Lists",
      icon: 'HeartIcon',
      links: [
        { textLabel: "My Lists", path: "/login" },
        { textLabel: "Create a List", path: "/login" },
      ],
    },
    {
      type: "Support",
      icon: 'QuestionIcon',
      links: [{ textLabel: "Help", path: "/help" }],
    },
  ];

  return (
    <section className="bg-gray-100 py-1 md:py-3">
      <div className="container mx-auto ">
        <PageTitle titleLabel="My Account" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          {data.map((item, index) => (
            <AccountType key={index} type={item.type} icon={item.icon} links={item.links} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyAccountContainer