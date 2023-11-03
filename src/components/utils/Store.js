import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../../reducers/productsSlice";

const Store = configureStore({
  reducer: {
  products: productsReducer,
  },
});

export default Store;