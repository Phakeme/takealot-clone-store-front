import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import sidebarIsOpen from "../features/sideBar/sidebarIsOpenSlice";
import appProducts from "../features/products/productsSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    sidebarIsOpen,
    appProducts,
  },
});
