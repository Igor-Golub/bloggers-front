import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export enum AuthModes {
  Login,
  Registration,
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    isConfirmed: false,
    mode: AuthModes.Login,
  },
  selectors: {
    getAuthStatus: sliceState => sliceState.isAuth,
    getAuthMode: sliceState => sliceState.mode,
  },
  reducers: {
    changeAuthStatus: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    changeAuthMode: (state, action: PayloadAction<AuthModes>) => {
      state.mode = action.payload;
    },
    changeConfirmMode: (state, action: PayloadAction<boolean>) => {
      state.isConfirmed = action.payload;
    },
  },
});

export const { actions: authActions, reducer: authReducer, selectors: authSelectors } = authSlice;
