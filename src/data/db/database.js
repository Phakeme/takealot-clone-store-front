import Mock from "../mock.js";

const database = {
  navigations: {
    navLinks: [
      { label: "Help", path: "/Help" },
      { label: "Sell on Takealot", path: "/sell" },
      { label: "Login", path: "/login" },
      { label: "Register", path: "/register" },
      { label: "Orders", path: "/orders" },
      { label: "My Accounts", path: "/my-accounts" },
      { label: "Cart", path: "/cart" },
      { label: "List", path: "/list" },
    ],
  },
};

Mock.onGet("/navigations").reply((config) => {
  const response = database.navigations;
  return [200, response];
});
