import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  clearDrink,
  fetchDrinks,
  fetchDrinkById,
  addDrinkToCart,
} from "./operations";
import {
  addDrinkToCartSuccessReducer,
  clearDrinkSuccessReducer,
  fetchDrinkByIdSuccessReducer,
  fetchDrinksSuccessReducer,
  fulfilledReducer,
  pendingReducer,
  rejectedReducer,
} from "./drinkReducers";

const extraActions = [clearDrink, fetchDrinks, fetchDrinkById, addDrinkToCart];
const getAction = (type) =>
  isAnyOf(...extraActions.map((action) => action[type]));

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
      .addCase(fetchDrinks.fulfilled, fetchDrinksSuccessReducer)
      .addCase(fetchDrinkById.fulfilled, fetchDrinkByIdSuccessReducer)
      .addCase(clearDrink.fulfilled, clearDrinkSuccessReducer)
      .addCase(addDrinkToCart.fulfilled, addDrinkToCartSuccessReducer)
      .addMatcher(getAction("pending"), pendingReducer)
      .addMatcher(getAction("fulfilled"), fulfilledReducer)
      .addMatcher(getAction("rejected"), rejectedReducer),
});

export const drinkReducer = drinkSlice.reducer;
