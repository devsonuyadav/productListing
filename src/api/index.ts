import { createAsyncThunk } from "@reduxjs/toolkit";
import { PriceFilter } from "../home/filter";
import config from "../utils/config";

export const search = createAsyncThunk(
  "getData",
  async ({ query = "" }: any, { rejectWithValue }) => {
    const filter = localStorage.getItem("priceFilter");

    try {
      const getData = await fetch(config.BASE_URL, {
        method: "GET",

        headers: {
          Authorization: config.TOKEN,
          "Content-Type": "application/json",
        },
      });
      const json: any[] = await getData.json();

      let temp = json.filter((product: any) =>
        product?.club?.name?.includes(query)
      );

      if (filter === PriceFilter.LOW) {
        temp.sort((a, b) => a.price - b.price);
      } else if (filter === PriceFilter.HIGH) {
        temp.sort((a, b) => b.price - a.price);
      }

      return temp;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
