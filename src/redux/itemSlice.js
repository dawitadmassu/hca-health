import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { groupByAlphabet } from "../utils/groupByAlphabet";

export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
  const response = await axios.get(`${process.env.PUBLIC_URL}/data.json`);

  return response.data.termList;
});

const itemSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
    filteredItems: {},
    groupedItems: {},
    status: null,
  },
  reducers: {
    filterItems: (state, action) => {
      const key = action.payload;

      if (
        Array.isArray(state.items) &&
        (state.groupedItems[key].length > 0 || key === "#")
      ) {
        state.filteredItems =
          key === "#" ? state.groupedItems : { [key]: state.groupedItems[key] };
      }
    },
    groupItems(state, action) {
      state.groupedItems = groupByAlphabet(state.items, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
        state.filteredItems = groupByAlphabet(action.payload, "#");
        state.groupedItems = groupByAlphabet(action.payload, "#");
      })
      .addCase(fetchItems.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { filterItems, groupItems } = itemSlice.actions;

export default itemSlice.reducer;
