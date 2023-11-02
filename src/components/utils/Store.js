import { applyMiddleware, configureStore, createStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import thunk from "redux-thunk";
import { productReducer } from "./CartSlice";

const Store = configureStore({
  reducer: {
    product: CartSlice,
  },
});
export let appStore = createStore(productReducer, applyMiddleware(thunk));
export default Store;
