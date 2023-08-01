import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';

const initialState = {
  error: null,
} as {
  error: null | string;
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    setError: (state, action : PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});
