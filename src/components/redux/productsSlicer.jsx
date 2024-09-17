import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "../../supabase";

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const { data, error } = await supabase.from("products").select("*");
  if (error) throw new Error(error.message);
  return data;
});

const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("products");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("Could not load products from localStorage", e);
    return [];
  }
};

const productSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: false,
    data: loadStateFromLocalStorage(),
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;

      try {
        const serializedState = JSON.stringify(action.payload);
        localStorage.setItem("products", serializedState);
      } catch (e) {
        console.warn("Could not save products to localStorage", e);
      }
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.error = true;
      state.isLoading = false;
    });
  },
});

export default productSlice.reducer;
