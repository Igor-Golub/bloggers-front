import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from 'features/auth';
import { userReducer } from 'entities/user';
import { baseApi } from 'shared/api/baseApi';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authReducer,
    user: userReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({ thunk: true }).concat(baseApi.middleware),
});
