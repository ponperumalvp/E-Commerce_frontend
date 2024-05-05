import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import { productReducer } from "./productSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    product: productReducer,
  },
});
