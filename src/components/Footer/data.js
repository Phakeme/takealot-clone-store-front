import Mastercard from "../../images/footer/mastercard.svg";
import Diners from "../../images/footer/diners.svg";
import Ebucks from "../../images/footer/ebucks.svg";
import Mobi from "../../images/footer/mobi.svg";
import Payfast from "../../images/footer/payfast-cropped.svg";
import Ozow from "../../images/footer/ozow.svg";
import Express from "../../images/footer/express.svg";
import Visa from "../../images/footer/visa.svg";

export const footerModulesData = [
  {
    title: "Shop",
    footerLinks: [
      { textlabel: "Daily Deals", path: "./login" },
      { textlabel: "App Only Deals", path: "./login" },
      { textlabel: "Clearance Sale", path: "./login" },
      { textlabel: "Gift Vouchers", path: "./login" },
    ],
  },
  {
    title: "Help",
    footerLinks: [
      { textlabel: "Help", path: "/help" },
      { textlabel: "Contact Us", path: "/login" },
      { textlabel: "Submit an Idea", path: "/login" },
      { textlabel: "Suggest a Product", path: "/login" },
      { textlabel: "Shipping & Delivery", path: "/login" },
      { textlabel: "Codealot Pickup Points", path: "/login" },
      { textlabel: "Returns", path: "/login" },
    ],
  },
  {
    title: "Account",
    footerLinks: [
      { textlabel: "My Account", path: "/account" },
      { textlabel: "Track Order", path: "/login" },
      { textlabel: "Returns", path: "/login" },
      { textlabel: "Personal Details", path: "/login" },
      { textlabel: "Invoices", path: "/login" },
      { textlabel: "Digital Library", path: "/login" },
    ],
  },
  {
    title: "Company",
    footerLinks: [
      { textlabel: "About Us", path: "/login" },
      { textlabel: "Careers", path: "/login" },
      { textlabel: "Sell on Codealot", path: "/sell" },
      { textlabel: "Deliver for Codealot", path: "/login" },
      { textlabel: "Press & News", path: "/login" },
      { textlabel: "Terms & Conditions", path: "/login" },
      { textlabel: "Competitions", path: "/login" },
      { textlabel: "Privacy Policy", path: "/login" },
      { textlabel: "Human Rights Statement", path: "/login" },
      { textlabel: "Speak Up Process", path: "/login" },
    ],
  },
];

export const footerLogosData = [
  Visa,
  Ozow,
  Payfast,
  Express,
  Mobi,
  Ebucks,
  Diners,
  Mastercard,
];
