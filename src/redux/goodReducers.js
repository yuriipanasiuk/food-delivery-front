export const fetchGoodsSuccessReducer = (state, action) => {
  state.items = action.payload;
};

export const fetchByIdSuccessReducer = (state, action) => {
  state.good = action.payload;
};

export const clearGoodSuccessReducer = (state) => {
  state.good = {};
};

export const addToCartSuccessReducer = (state, action) => {
  state.cart.push(action.payload);
};

export const fetchCartSuccessReducer = (state, action) => {
  state.cartItems = action.payload;
};

export const deleteFromCartSuccessReducer = (state, action) => {
  state.cartItems = state.cartItems.filter(
    (item) => item._id !== action.payload
  );
};

export const fetchAllOrderSuccessReducer = (state, action) => {
  state.history = action.payload;
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
