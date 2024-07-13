import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: Partial<Record<string, boolean>> = {};

const dialogsSlice = createSlice({
  name: 'dialogs',
  initialState,
  selectors: {
    dialogStatus: (sliceState, key: string) => sliceState[key],
  },
  reducers: {
    openDialog(state, { payload }: PayloadAction<{ key: string }>) {
      state[payload.key] = true;
    },
    closeDialog(state, { payload }: PayloadAction<{ key: string }>) {
      state[payload.key] = false;
    },
  },
});

export const {
  name: dialogsReducerName,
  actions: dialogsActions,
  reducer: dialogsReducer,
  selectors: dialogsSelectors,
} = dialogsSlice;
