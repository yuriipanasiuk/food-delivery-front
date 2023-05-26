import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = "http://localhost:3001/api";
axios.defaults.baseURL = "https://food-delivery-39y8.onrender.com/api";

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

export const fetchDrinks = createAsyncThunk(
  "goods/fetchDrinks",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/drink");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const fetchDrinkById = createAsyncThunk(
  "goods/fetchDrink",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/drink/${id}`);
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
      const response = await axios.get(`/goods`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addDrinkToCart = createAsyncThunk(
  "goods/addToCart",
  async (id, thunkAPI) => {
    try {
      const response = await axios.post("/drink", { id });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const clearDrink = createAsyncThunk(
  "goods/clearGood",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/drink`);
      return response.data;
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

export const submitOrder = createAsyncThunk(
  "goods/submit",
  async ({ name, email, phone, address }, thunkAPI) => {
    try {
      const response = await axios.post(`/order`, {
        name,
        email,
        phone,
        address,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchAllOrder = createAsyncThunk(
  "goods/order",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/order`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeBasket = createAsyncThunk(
  "goods/order",
  async (_, thunkAPI) => {
    try {
      await axios.delete(`/basket`);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
