import { createSlice } from "@reduxjs/toolkit";

export const sidebarIsOpen = createSlice({
  name: "sidebarIsOpen",
  initialState: {
    value: false,
  },
  reducers: {
    openSideBar: (state) => {
      state.value = true;
    },
    closeSideBar: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openSideBar, closeSideBar } = sidebarIsOpen.actions;

export default sidebarIsOpen.reducer;
