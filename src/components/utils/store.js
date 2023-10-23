import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slice";
let Store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});
export default Store;
