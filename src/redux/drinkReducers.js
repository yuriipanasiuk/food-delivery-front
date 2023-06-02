export const fetchDrinksSuccessReducer = (state, action) => {
  state.drinks = action.payload;
};

export const fetchDrinkByIdSuccessReducer = (state, action) => {
  state.good = action.payload;
};

export const clearDrinkSuccessReducer = (state) => {
  state.good = {};
};

export const addDrinkToCartSuccessReducer = (state, action) => {
  state.drinkCart.push(action.payload);
};

export const pendingReducer = (state) => {
  state.isLoading = true;
};

export const fulfilledReducer = (state) => {
  state.isLoading = false;
};

export const rejectedReducer = (state) => {
  state.isLoading = true;
};
