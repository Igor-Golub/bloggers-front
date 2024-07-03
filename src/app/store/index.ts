import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../../entities/user';
import { authReducer } from '../../features/auth';
import { baseApi } from '../../shared/api/baseApi.ts';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authReducer,
    user: userReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({ thunk: true }).concat(baseApi.middleware),
});
