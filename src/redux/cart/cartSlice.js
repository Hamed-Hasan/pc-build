import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, actions) => {
      state.products.push(actions.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
