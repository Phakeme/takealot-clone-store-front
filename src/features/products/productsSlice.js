import { createSlice } from "@reduxjs/toolkit";
import commerce from "../../lip/commerce";

export const productsSlice = createSlice({
  name: "appProducts",
  initialState: {
    value: [],
  },
  reducers: {
    fetchProducts: (state) => {
      // state.value = [{ product: "data" }];
      commerce.products
        .list()
        .then((products) => {
          state.value = "products.data";
          console.log(products.data, "products.data");
        })
        .catch((error) => {
          console.log("There was an error fetching the products", error);
        });
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchProducts } = productsSlice.actions;

export default productsSlice.reducer;
