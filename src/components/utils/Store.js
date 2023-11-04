import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";

const Store = configureStore({
  reducer: {
    productdata: CartSlice,
  },
});

export default Store;
