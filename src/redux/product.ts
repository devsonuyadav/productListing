import { createSlice } from "@reduxjs/toolkit";
import { search } from "../api";
import { InitialState } from "./types";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    query: "",
  },
  reducers: {
    getProduct: (state: InitialState, action) => {
      state.products = action.payload;
    },

    setQuery: (state: InitialState, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: {
    //@ts-ignore
    [search.pending]: (state: InitialState, { payload }: any) => {
      state.loading = true;
    },
    //@ts-ignore
    [search.fulfilled]: (state: InitialState, { payload }: any) => {
      state.products = payload;
      state.loading = false;
    },
    //@ts-ignore
    [search.rejected]: (state: InitialState, { payload }: any) => {
      state.loading = false;
    },
  },
});

export const { getProduct, setQuery } = productSlice.actions;
export default productSlice.reducer;
