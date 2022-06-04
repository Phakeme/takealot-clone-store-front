import Mock from "../mock.js";
import CartGreen from "../../images/cart-green.svg";
import Heart from "../../images/heart-red.svg";
import AdvertLiquor from "../../images/ad-1.png";
import AdvertHome from "../../images/ad-2.png";
import AdvertGardena from "../../images/ad-3.png";
import AdvertPhones from "../../images/ad-4.png";

const database = {
  navigations: {
    navLinks: [
      { label: "Help", path: "/help" },
      { label: "Sell on Codealot", path: "/sell" },
      { label: "Login", path: "/login" },
      { label: "Register", path: "/login" },
      { label: "Orders", path: "/login" },
      { label: "My Accounts", path: "/account" },
      { label: "Cart", path: "/cart", icon: CartGreen },
      { label: "Lists", path: "/wishlist", icon: Heart },
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
  adverts: [
    { path: "/liquor", image: AdvertLiquor, label: "liquor" },
    { path: "/liquor", image: AdvertHome, label: "home" },
    { path: "/liquor", image: AdvertGardena, label: "gardena" },
    // { path: "/liquor", image: AdvertPhones, label: "phones" },
  ],
};

Mock.onGet("/navigations").reply((config) => {
  const response = database.navigations;
  return [200, response];
});

Mock.onGet("/hero-navigations").reply((config) => {
  const response = database.heroNavigations;
  return [200, response];
});

Mock.onGet("/adverts").reply((config) => {
  const response = database.adverts;
  return [200, response];
});
