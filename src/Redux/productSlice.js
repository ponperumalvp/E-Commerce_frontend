import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl2 } from "../config/config";

const initialState = {
  products: [],
  savedProducts: [],
  myProducts: [],
  errMsg: "",
};
export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (postData, thaunk) => {
    try {
      console.log(postData);
      const response = await axios.post(`${baseUrl2}/create`, postData);
      console.log(response);
      return response.data;
    } catch (err) {
      return thaunk.rejectWithValue(err.response.data);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createProduct.pending, (state, action) => {})
      .addCase(createProduct.fulfilled, (state, action) => {
        state.products = [...state.products, action.payload];
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.errMsg = action.payload.errMsg;
      });
  },
});

// export const { addProduct } = productSlice.actions;

export const productReducer = productSlice.reducer;
