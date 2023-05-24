import { configureStore } from "@reduxjs/toolkit";
import { basketReducer } from "./basketSlice";
import { goodsReducer } from "./goodsSlice";

const store = configureStore({
  reducer: {
    basket: basketReducer,
    goods: goodsReducer,
  },
});

export default store;
