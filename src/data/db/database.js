import Mock from "../mock.js";
import CartGreen from "../../images/cart-green.svg";
import Heart from "../../images/heart-red.svg";
import AdvertLiquor from "../../images/ad-1.png";
import AdvertWasher from "../../images/ad-2.png";
import AdvertPhillips from "../../images/ad-3.png";
import AdvertFragrance from "../../images/ad-4.png";
import Automotive from "../../images/ShopbyDepartments/automotive.jpg";
import Baby from "../../images/ShopbyDepartments/baby.jpg";
import Beauty from "../../images/ShopbyDepartments/beauty.jpg";
import Books from "../../images/ShopbyDepartments/books.jpg";
import Gaming from "../../images/ShopbyDepartments/gaming.jpg";
import Camping from "../../images/ShopbyDepartments/camping.jpg";
import Luggage from "../../images/ShopbyDepartments/luggage.jpg";
import Cellphone from "../../images/ShopbyDepartments/cellphone.jpg";
import Computer from "../../images/ShopbyDepartments/computer.jpg";
import Garden from "../../images/ShopbyDepartments/garden.jpg";
import Groceries from "../../images/ShopbyDepartments/groceries.jpg";
import Health from "../../images/ShopbyDepartments/health.jpg";
import Liquor from "../../images/ShopbyDepartments/liquor.jpg";
import Office from "../../images/ShopbyDepartments/office.jpg";
import Toys from "../../images/ShopbyDepartments/toys.jpg";
import Sport from "../../images/ShopbyDepartments/sport.jpg";
import Audio from "../../images/ShopbyDepartments/audio.jpg";
import Pets from "../../images/ShopbyDepartments/pets.jpg";

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
      { label: "Automotive & DIY", image: Automotive },
      { label: "Baby & Toddler", image: Baby },
      { label: "Beauty", image: Beauty },
      { label: "Books & Courses", image: Books },
      { label: "Camping & Outdoor", image: Camping },
      { label: "Cellphones & Wearables", image: Cellphone },
      { label: "Fashion & Luggage", image: Luggage },
      { label: "Computers & Electronics", image: Computer },
      { label: "Gaming", image: Gaming },
      { label: "Garden, Pool & Patio", image: Garden },
      { label: "Groceries & Household", image: Groceries },
      { label: "Health & Personal Care", image: Health },
      { label: "Liquor", image: Liquor },
      { label: "Office & Stationery", image: Office },
      { label: "Pets", image: Pets },
      { label: "Sport & Training", image: Sport },
      { label: "Toys", image: Toys },
      { label: "TV, Audio & Media", image: Audio },
    ],
  },
  adverts: [
    { image: AdvertLiquor, label: "liquor" },
    { image: AdvertFragrance, label: "Fragrance " },
    { image: AdvertWasher, label: "Washer" },
    { image: AdvertPhillips, label: "phillips" },
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
