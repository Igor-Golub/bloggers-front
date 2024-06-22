import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
  },
  selectors: {
    getAuthStatus: (sliceState) => sliceState.isAuth,
  },
  reducers: {
    changeAuthStatus: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
});

export const {
  actions: authActions,
  reducer: authReducer,
  selectors: authSelectors,
} = authSlice;
