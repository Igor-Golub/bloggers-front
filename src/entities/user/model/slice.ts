import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'user',
  initialState: {
    account: null,
  },
  selectors: {},
  reducers: {},
});

export const {
  name: usersReducerName,
  actions: userActions,
  reducer: userReducer,
  selectors: userSelectors,
} = usersSlice;
