import Mock from "../mock.js";
import CartGreen from "../../images/cart-green.svg";
import Heart from "../../images/heart-red.svg";

const database = {
  navigations: {
    navLinks: [
      { label: "Help", path: "/Help" },
      { label: "Sell on Takealot", path: "/sell" },
      { label: "Login", path: "/login" },
      { label: "Register", path: "/register" },
      { label: "Orders", path: "/orders" },
      { label: "My Accounts", path: "/my-accounts" },
      { label: "Cart", path: "/cart", icon: CartGreen },
      { label: "Lists", path: "/lists", icon: Heart },
    ],
  },
};

Mock.onGet("/navigations").reply((config) => {
  const response = database.navigations;
  return [200, response];
});
