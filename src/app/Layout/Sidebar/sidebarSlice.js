import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    activeItem: "dashboard",
  },
  reducers: {
    setActiveItem: (state, action) => {
      state.activeItem = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setActiveItem } = sidebarSlice.actions;

export default sidebarSlice.reducer;
