import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sumRating: 0,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    avarageRating: (state, actions) => {
      const sumRate = actions.payload
        ?.map((productRate) => parseInt(productRate.rating))
        .reduce((a, b) => a + b);
      state.sumRating = (sumRate / actions.payload.length).toFixed(1);
    },
  },
});

export const { avarageRating } = productSlice.actions;

export default productSlice.reducer;
