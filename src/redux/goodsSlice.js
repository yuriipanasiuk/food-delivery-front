import { createSlice } from "@reduxjs/toolkit";
import {
  addToCart,
  clearGood,
  fetchById,
  fetchCart,
  fetchGoods,
} from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  good: {},
  cart: [],
  cartItems: [],
};

const goodSlice = createSlice({
  name: "goods",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchGoods.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGoods.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchGoods.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.good = action.payload;
      })
      .addCase(fetchById.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(clearGood.fulfilled, (state) => {
        state.good = {};
      })
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.cart.push(action.payload);
      })
      .addCase(addToCart.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.cartItems = action.payload;
      })
      .addCase(fetchCart.rejected, (state) => {
        state.isLoading = false;
      }),
});

export const goodsReducer = goodSlice.reducer;
