import { createSlice } from "@reduxjs/toolkit";
import {
  clearDrink,
  fetchDrinks,
  fetchDrinkById,
  addDrinkToCart,
} from "./operations";

const initialState = {
  drink: {},
  drinks: [],
  drinkCart: [],
  isLoading: false,
};

const drinkSlice = createSlice({
  name: "drink",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchDrinks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDrinks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.drinks = action.payload;
      })
      .addCase(fetchDrinks.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchDrinkById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDrinkById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.drink = action.payload;
      })
      .addCase(fetchDrinkById.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(clearDrink.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(clearDrink.fulfilled, (state) => {
        state.drink = {};
      })
      .addCase(clearDrink.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(addDrinkToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addDrinkToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.drinkCart.push(action.payload);
      })
      .addCase(addDrinkToCart.rejected, (state) => {
        state.isLoading = false;
      }),
});

export const drinkReducer = drinkSlice.reducer;
