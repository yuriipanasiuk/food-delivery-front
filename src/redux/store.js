import { configureStore } from "@reduxjs/toolkit";
import { goodsReducer } from "./goodsSlice";
import { drinkReducer } from "./drinkSlice";

const store = configureStore({
  reducer: {
    goods: goodsReducer,
    drinks: drinkReducer,
  },
});

export default store;
