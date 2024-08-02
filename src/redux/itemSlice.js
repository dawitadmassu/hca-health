import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
  const response = await axios.get(`${process.env.PUBLIC_URL}/data.json`);

  return response.data.termList;
});

const itemSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
    filteredItems: [],
    status: null,
  },
  reducers: {
    filterItems: (state, action) => {
      if (Array.isArray(state.items)) {
        state.filteredItems = state.items.filter(
          (item) =>
            action.payload === "#" || item.title.startsWith(action.payload)
        );
      }
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
        state.filteredItems = action.payload;
      })
      .addCase(fetchItems.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { filterItems } = itemSlice.actions;

export default itemSlice.reducer;
