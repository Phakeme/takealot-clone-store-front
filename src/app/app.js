import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import sidebarIsOpen from "../features/sideBar/sidebarIsOpenSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    sidebarIsOpen: sidebarIsOpen,
  },
});
