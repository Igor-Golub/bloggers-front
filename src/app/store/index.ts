import { configureStore } from '@reduxjs/toolkit';
import { authReducer, authReducerName } from 'features/auth';
import { userReducer, usersReducerName } from 'entities/user';
import { baseApi } from 'shared/api/baseApi';
import { dialogsReducer, dialogsReducerName } from 'shared/ui/dialogs';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [dialogsReducerName]: dialogsReducer,
    [authReducerName]: authReducer,
    [usersReducerName]: userReducer,
  },
  devTools: true,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ thunk: true }).concat(baseApi.middleware),
});
