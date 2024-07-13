import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export enum AuthModes {
  Login,
  Registration,
}

export enum RecoveryModes {
  Init,
  NewPassword,
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    isConfirmed: false,
    authMode: AuthModes.Login,
    recoveryMode: RecoveryModes.Init,
  },
  selectors: {
    getAuthStatus: sliceState => sliceState.isAuth,
    getAuthMode: sliceState => sliceState.authMode,
    getRecoveryMode: sliceState => sliceState.recoveryMode,
  },
  reducers: {
    changeAuthStatus: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    changeAuthMode: (state, action: PayloadAction<AuthModes>) => {
      state.authMode = action.payload;
    },
    changeConfirmMode: (state, action: PayloadAction<boolean>) => {
      state.isConfirmed = action.payload;
    },
    changeRecoveryMode: (state, action: PayloadAction<RecoveryModes>) => {
      state.recoveryMode = action.payload;
    },
  },
});

export const {
  actions: authActions,
  reducer: authReducer,
  selectors: authSelectors,
  name: authReducerName,
  reducerPath,
} = authSlice;
