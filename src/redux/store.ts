import { configureStore } from "@reduxjs/toolkit";

import { Products } from "./types";
import productReducer from "./product";

export interface IStore {
  productsData: { products: Products[]; loading: boolean };
}
export default configureStore({
  reducer: {
    productsData: productReducer,
  },
});
