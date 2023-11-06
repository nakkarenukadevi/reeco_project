import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "productdata",
  initialState: {
    data: [],
  },
  reducers: {
    fetchdata(state, action) {
      state.data = action.payload;
    },

    changeProductStatus: (state, action) => {
      const { id, status } = action.payload;
      state.data = state.data.map((item) => {
        if (item.id == id) {
          return { ...item, status: status };
        }
        return item;
      });
    },
    updateProductData: (state, action) => {
      state.data = state.data.map((productItem) => {
        if (productItem.id == action.payload.id) {
          return { ...productItem, ...action.payload };
        }
        return productItem;
      });
    },
    addProductReducer: (state, action) => {
      state.data.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.data = state.data.filter((product) => {
        if (product.id !== action.payload) {
          return true;
        }
        return false;
      });
    },
    serachProductItem: (state, action) => {
      state.data = state.data.filter((serch_item) => {
        if (serch_item.status == action.payload) {
          return true;
        }
        return false;
      });
    },
  },
});

export let {
  fetchdata,
  changeProductStatus,
  updateProductData,
  addProductReducer,
  removeProduct,
  serachProductItem,
} = cartSlice.actions;
export default cartSlice.reducer;
