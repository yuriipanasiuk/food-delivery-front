import { createSlice } from "@reduxjs/toolkit";
import {
  addToCart,
  clearGood,
  deleteFromCart,
  fetchAllOrder,
  fetchById,
  fetchCart,
  submitOrder,
  fetchGoods,
} from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  good: {},
  cart: [],
  cartItems: [],
  history: [],
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
        state.isLoading = false;
        state.cartItems = action.payload;
      })
      .addCase(fetchCart.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteFromCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteFromCart.fulfilled, (state, action) => {
        state.isLoading = false;

        state.cartItems = state.cartItems.filter(
          (item) => item._id !== action.payload
        );
      })
      .addCase(deleteFromCart.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(submitOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(submitOrder.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(submitOrder.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchAllOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.history = action.payload;
      })
      .addCase(fetchAllOrder.rejected, (state) => {
        state.isLoading = false;
      }),
});

export const goodsReducer = goodSlice.reducer;
