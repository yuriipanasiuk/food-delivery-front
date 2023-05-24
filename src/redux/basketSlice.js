import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",
  initialState: {},
  extraReducers: {},
});

export const basketReducer = basketSlice.reducer;
