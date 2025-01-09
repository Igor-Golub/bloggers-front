import { createSlice } from '@reduxjs/toolkit';

export const {
  actions: userActions,
  reducer: userReducer,
  selectors: userSelectors,
} = createSlice({
  name: 'user',
  initialState: {
    account: null,
  },
  selectors: {},
  reducers: {},
});
