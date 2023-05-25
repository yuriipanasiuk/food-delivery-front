import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:3001/api";

export const fetchGoods = createAsyncThunk(
  "goods/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/goods");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const fetchById = createAsyncThunk(
  "goods/fetchOne",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/goods/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const clearGood = createAsyncThunk(
  "goods/clearGood",
  async (_, thunkAPI) => {
    try {
      // const response = await axios.get(`/goods/${id}`);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addToCart = createAsyncThunk(
  "goods/addToCart",
  async (id, thunkAPI) => {
    try {
      const response = await axios.post("/goods", { id });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCart = createAsyncThunk(
  "goods/cartGoods",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/basket");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteFromCart = createAsyncThunk(
  "goods/delete",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/goods/${id}`);
      return id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
