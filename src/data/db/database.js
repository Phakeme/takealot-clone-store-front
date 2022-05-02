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
  heroNavigations: {
    heroNavLinks: [
      { label: "Automotive & DIY", path: "/automotive" },
      { label: "Baby & Toddler", path: "/baby-toddler" },
      { label: "Beauty", path: "/Beauty" },
      { label: "Books & Courses", path: "/books-courses" },
      { label: "Camping & Outdoor", path: "/camping-outdoor" },
      { label: "Cellphones & Wearables", path: "/cellphones-wearables" },
      { label: "Fashion & Luggage", path: "/fashion-luggage" },
      { label: "Computers & Electronics", path: "/computers-electronics" },
      { label: "Gaming", path: "/gaming" },
      { label: "Garden, Pool & Patio", path: "/garden-Pool-Patio" },
      { label: "Groceries & Household", path: "/groceries-household" },
      { label: "Health & Personal Care", path: "/health-personal-care" },
      { label: "Liquor", path: "/Liquor" },
      { label: "Office & Stationery", path: "/office-Stationery" },
      { label: "Pets", path: "/pets" },
      { label: "Sport & Training", path: "/sport-training" },
      { label: "Toys", path: "/toys" },
      { label: "TV, Audio & Media", path: "/tv-audio-media" },
    ],
  },
};

Mock.onGet("/navigations").reply((config) => {
  const response = database.navigations;
  return [200, response];
});

Mock.onGet("/hero-navigations").reply((config) => {
  const response = database.heroNavigations;
  return [200, response];
});
