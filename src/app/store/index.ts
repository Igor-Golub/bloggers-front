import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../../shared/api/baseApi.ts";
import { authReducer } from "../../features/auth";
import { userReducer } from "../../features/user";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true }).concat(baseApi.middleware),
});
