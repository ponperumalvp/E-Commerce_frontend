import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  savedProducts: [],
  myProducts: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
  },
  //   extraReducers: {},
});

// export const { addProduct } = productSlice.actions;

export const productReducer = productSlice.reducer;
