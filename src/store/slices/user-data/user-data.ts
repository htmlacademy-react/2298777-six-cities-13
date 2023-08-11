import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../../const';
import { User, ValueOf } from '../../../types/app-type';
import { checkAuthAction, loginAction, logoutAction } from '../../api-actions/user';
import { removeToken } from '../../../services/token';
import { toast } from 'react-toastify';
import { parseStatusCode } from '../../../util/util';
import { StatusCodes } from 'http-status-codes';

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
      .addCase(loginAction.rejected, (state, action) => {
        state.user = null;
        state.authStatus = 'NO_AUTH';
        if (action.error.message && parseStatusCode(action.error.message) !== StatusCodes.BAD_REQUEST) {
          toast.warn('Error while logging in');
        }
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.user = null;
        state.authStatus = 'NO_AUTH';
        removeToken();
      })
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authStatus = 'AUTH';
      })
      .addCase(checkAuthAction.rejected, (state, action) => {
        state.user = null;
        state.authStatus = 'NO_AUTH';
        if (action.error.message && parseStatusCode(action.error.message) !== StatusCodes.UNAUTHORIZED) {
          toast.warn('Error while checking authorization');
        }
      });
  },
});
