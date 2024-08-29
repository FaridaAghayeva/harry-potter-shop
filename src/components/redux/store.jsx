import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productsSlicer";
export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});
