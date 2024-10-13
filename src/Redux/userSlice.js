import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../config/config";
import { setItem } from "../shared/localstorage/localStorage";

const initialState = {
  user: [],
  isLogin: false,
  newUser: "",
  existUser: "",
  error: "",
};

export const createUser = createAsyncThunk(
  "users/createUser",
  async (postData, thunkAPI) => {
    try {
      console.log(postData);
      const res = await axios.post(`${baseUrl}/users/register`, postData);
      console.log(res.data.message);
      if (res.data.message === "register successful") {
        await sessionStorage.setItem("userId", res.data.userId);
        await setItem("userId", res.data.userId);
        await setItem("accessToken", res.data.token);
        await setItem("userName", res.data.userName);
        // toast.success(res.data.message);

        return "verified";
      } else {
        return "verification failed";
      }
    } catch (err) {
      return thunkAPI.rejectWithValue({ errMsg: err.message });
    }
  }
);

export const verifyUser = createAsyncThunk(
  "users/verifyUser",
  async (postData, thunkAPI) => {
    try {
      const res = await axios.post(`${baseUrl}/users/login`, postData);
      console.log(res);

      if (res.data.message === "login successful") {
        console.log(res.data.userId);
        sessionStorage.setItem("userId", res.data.userId);
        await setItem("userId", res.data.userId);
        // await setItem("accessToken", res.data.token);
        await setItem("userName", res.data.userName);
        // toast.success(res.data.message);

        return res;
      } else {
        return "verification failed", alert("invalid");
      }
    } catch (err) {
      return thunkAPI.rejectWithValue({ errMsg: err.message });
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setuser: (state, action) => {
      state.user = action.payload;
    },
    setUser: (state, action) => {
      state.newUser = action.payload;
    },
    setExistUser: (state, action) => {
      state.existUser = action.payload;
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state, action) => {})
      .addCase(createUser.fulfilled, (state, action) => {
        state.user = [...state.user, action.payload];
      })
      .addCase(createUser.rejected, (state, action) => {
        state.errMsg = action.payload.errMsg;
      });
  },
});

export const { setUser, setExistUser, setIsLogin, setuser } = userSlice.actions;
export default userSlice.reducer;
