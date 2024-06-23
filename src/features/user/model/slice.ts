import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  selectors: {},
  reducers: {},
});

export const {
  actions: userActions,
  reducer: userReducer,
  selectors: userSelectors,
} = userSlice;
