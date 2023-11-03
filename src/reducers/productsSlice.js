import { createSlice } from '@reduxjs/toolkit'

const initialState = [

]

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    productsAdded(state, action) {
      state.push(action.payload);
    },
    productsModified(state, action) {
      
      const matchingProduct = state.find(prod => prod.id === action.payload.id)

      if (matchingProduct) {
        // Can directly "mutate" the nested object
        matchingProduct= action.payload;
      }
    }
  }
})

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { productsAdded,productsModified } = productsSlice.actions

// Export the slice reducer as the default export
export default productsSlice.reducer