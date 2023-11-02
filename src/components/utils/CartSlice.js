import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "product",
  initialState: { status: "" },
  reducers: {
    approved: (state, action) => {
      state.status = "approved";
    },
  },
});

export function productReducer() {}

export let { approved } = cartSlice.actions;
export default cartSlice.reducer;
