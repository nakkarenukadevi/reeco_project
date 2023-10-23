import { createSlice } from "@reduxjs/toolkit";

let CartSlice = createSlice({
  name: "cart",
  initialState: {
    approved: "",
  },
  reducers: {
    increment: (state, action) => {
      state.approved = "approved";
    },
  },
});
export const { increment } = CartSlice.actions;
export default CartSlice.reducer;
