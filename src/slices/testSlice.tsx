import { createSlice } from "@reduxjs/toolkit";

const initialState: { items: string[] } = {
  items: [],
};

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    addToTest: (state, action) => {
      state.items = [...state.items, action.payload];
    },
  },
});

export const { addToTest } = testSlice.actions;

export const selectCount = (state: { items: string }) => state.items.length;

export default testSlice.reducer;
