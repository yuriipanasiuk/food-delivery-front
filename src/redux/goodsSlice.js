import { createSlice, isAnyOf } from "@reduxjs/toolkit";
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

import {
  addToCartSuccessReducer,
  clearGoodSuccessReducer,
  deleteFromCartSuccessReducer,
  fetchAllOrderSuccessReducer,
  fetchByIdSuccessReducer,
  fetchCartSuccessReducer,
  fetchGoodsSuccessReducer,
  fulfilledReducer,
  pendingReducer,
  rejectedReducer,
} from "./goodReducers";

const extraActions = [
  addToCart,
  clearGood,
  deleteFromCart,
  fetchAllOrder,
  fetchById,
  fetchCart,
  submitOrder,
  fetchGoods,
];

const getAction = (type) =>
  isAnyOf(...extraActions.map((action) => action[type]));

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
      .addCase(fetchGoods.fulfilled, fetchGoodsSuccessReducer)
      .addCase(fetchById.fulfilled, fetchByIdSuccessReducer)
      .addCase(clearGood.fulfilled, clearGoodSuccessReducer)
      .addCase(addToCart.fulfilled, addToCartSuccessReducer)
      .addCase(fetchCart.fulfilled, fetchCartSuccessReducer)
      .addCase(deleteFromCart.fulfilled, deleteFromCartSuccessReducer)
      .addCase(fetchAllOrder.fulfilled, fetchAllOrderSuccessReducer)
      .addMatcher(getAction("pending"), pendingReducer)
      .addMatcher(getAction("fulfilled"), fulfilledReducer)
      .addMatcher(getAction("rejected"), rejectedReducer),
});

export const goodsReducer = goodSlice.reducer;
