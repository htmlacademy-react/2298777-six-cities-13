import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../const';
import { User, ValueOf } from '../../types/app-type';
import { checkAuthAction, loginAction, logoutAction } from '../api-action';
import { removeToken } from '../../services/token';

const initialState = {
  user: null,
  authStatus: 'UNKNOWN',
} as {
  user: null | User;
  authStatus: ValueOf<typeof AuthorizationStatus>;
};

export const userData = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authStatus = 'AUTH';
      })
      .addCase(loginAction.rejected, (state) => {
        state.user = null;
        state.authStatus = 'NO_AUTH';
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.user = null;
        state.authStatus = 'NO_AUTH';
        removeToken();
      })
      .addCase(logoutAction.rejected, () => {
        true;
      })
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authStatus = 'AUTH';
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.user = null;
        state.authStatus = 'NO_AUTH';
      });
  },
});
