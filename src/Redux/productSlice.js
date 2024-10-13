import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl2 } from "../config/config";

const initialState = {
  Products: [],
  newProduct: "",
  savedProducts: [],
  saveProduct: "",
  cartProducts: [],
  cartProduct: "",
  myProducts: [],
  count: 1,
  totalCount: "",
  totalAmount: "",
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
export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (_, thunk) => {
    try {
      const response = await axios.get(`${baseUrl2}`);
      console.log(response);
      return response.data;
    } catch (err) {
      return thunk.rejectWithValue(err.response.data);
    }
  }
);
export const saveProduct = createAsyncThunk(
  "product/saveProduct",
  async (postData, thunk) => {
    try {
      console.log(postData);
      const response = await axios.put(`${baseUrl2}/saved`, postData);
      console.log(response);

      return response.data.savedProducts;
    } catch (err) {
      return thunk.rejectWithValue(err.response.data);
    }
  }
);

export const getSavedProduct = createAsyncThunk(
  "product/getSavedProduct",
  async (_, thunk) => {
    try {
      const userId = await sessionStorage.getItem("userId");
      const response = await axios.get(`${baseUrl2}/getSaved/${userId}`);
      console.log(response);
      console.log(response.data.savedProducts);
      return response.data.savedProducts;
    } catch (err) {
      return thunk.rejectWithValue(err.response.data);
    }
  }
);
export const cartProduct = createAsyncThunk(
  "product/cartProduct",
  async (postData, thunk) => {
    try {
      console.log(postData);
      const response = await axios.post("http://localhost:4000/cart", postData);
      console.log(response);

      return response.data.cartProduct;
    } catch (err) {
      return thunk.rejectWithValue(err.response.data);
    }
  }
);
export const getCartProduct = createAsyncThunk(
  "product/getCartProduct",
  async (_, thunk) => {
    try {
      const userId = await sessionStorage.getItem("userId");
      const response = await axios.get(`http://localhost:4000/cart/${userId}`);
      console.log(response);
      console.log(response.data.cartProducts);
      return response.data.cartProducts;
    } catch (err) {
      return thunk.rejectWithValue(err.response.data);
    }
  }
);
export const deleteSavedProduct = createAsyncThunk(
  "product/deleteSavedProduct",
  async (postData, thunkAPI) => {
    try {
      const res = await axios.delete(`${baseUrl2}/deleteSaved`, postData);
      console.log(res);
      return res.data._id;
    } catch (err) {
      return thunkAPI.rejectWithValue({ errMsg: err.message });
    }
  }
);
export const deleteCartProduct = createAsyncThunk(
  "product/deleteCartProduct",
  async (id, thunkAPI) => {
    try {
      console.log(id);
      const res = await axios.delete(
        `http://localhost:4000/cart/deleteCart/${id}`
      );
      console.log(res.data._id);
      return res.data._id;
    } catch (err) {
      return thunkAPI.rejectWithValue({ errMsg: err.message });
    }
  }
);
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.newProduct = action.payload;
    },
    setSavedata: (state, action) => {
      state.Products = action.payload;
    },
    setCountOnly: (state, action) => {
      state.count = action.payload;
    },
    setCount: (state, action) => {
      const { productId, count } = action.payload;
      const productIndex = state.cartProducts.findIndex(
        (product) => product._id === productId
      );
      if (productIndex !== -1) {
        state.cartProducts[productIndex].count = count;
      }
    },
    setDeleteSaved: (state, action) => {
      state.savedProducts = state.savedProducts.filter((item) => {
        return item._id !== action.payload;
      });
    },
    setTotalCount: (state, action) => {
      state.totalCount = action.payload;
    },
    setTotalAmount: (state, action) => {
      state.totalAmount = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createProduct.pending, (state, action) => {})
      .addCase(createProduct.fulfilled, (state, action) => {
        state.newProduct = [...state.newProduct, action.payload];
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.errMsg = action.payload;
      })
      .addCase(getProduct.pending, (state, action) => {})
      .addCase(getProduct.fulfilled, (state, action) => {
        state.Products = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.errMsg = action.payload;
      })
      .addCase(saveProduct.pending, (state, action) => {})
      .addCase(saveProduct.fulfilled, (state, action) => {
        state.saveProduct = action.payload;
      })
      .addCase(saveProduct.rejected, (state, action) => {
        state.errMsg = action.payload;
      })
      .addCase(getSavedProduct.pending, (state, action) => {})
      .addCase(getSavedProduct.fulfilled, (state, action) => {
        state.savedProducts = action.payload;
        console.log(action.payload);
      })
      .addCase(getSavedProduct.rejected, (state, action) => {
        state.errMsg = action.payload;
      })
      .addCase(cartProduct.pending, (state, action) => {})
      .addCase(cartProduct.fulfilled, (state, action) => {
        state.count = 1;
      })
      .addCase(cartProduct.rejected, (state, action) => {
        state.errMsg = action.payload;
      })
      .addCase(getCartProduct.pending, (state, action) => {})
      .addCase(getCartProduct.fulfilled, (state, action) => {
        state.cartProducts = action.payload;
        console.log(action.payload);
      })
      .addCase(getCartProduct.rejected, (state, action) => {
        state.errMsg = action.payload;
      })
      .addCase(deleteSavedProduct.pending, (state, action) => {})
      .addCase(deleteSavedProduct.fulfilled, (state, action) => {
        state.savedProducts = state.savedProducts.filter((item) => {
          return item._id !== action.payload;
        });
      })
      .addCase(deleteSavedProduct.rejected, (state, action) => {
        state.errMsg = action.payload;
      })

      .addCase(deleteCartProduct.pending, (state, action) => {})
      .addCase(deleteCartProduct.fulfilled, (state, action) => {
        state.cartProducts = state.cartProducts.filter((item) => {
          return item._id !== action.payload;
        });
      })
      .addCase(deleteCartProduct.rejected, (state, action) => {
        state.errMsg = action.payload;
      });
  },
});

export const {
  setSavedata,
  setCount,
  setDeleteSaved,
  addProduct,
  setTotalAmount,
  setTotalCount,
  setCountOnly,
} = productSlice.actions;

export const productReducer = productSlice.reducer;
