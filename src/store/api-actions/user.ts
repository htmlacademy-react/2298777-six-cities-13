import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { State } from '../../types/store';
import { APIRoute, AppRoutes } from '../../const';
import { AuthData, User } from '../../types/app-type';
import { AppDispatch } from '../../types/store';
import { fetchFavoritesAction } from './favorite';
import { setToken } from '../../services/token';

const checkAuthAction = createAsyncThunk<User, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'checkAuth',
  async (_arg, {extra: api}) => {
    const response = await api.get<User>(APIRoute.Login);
    return response.data;
  },
);

const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
  },
);

const loginAction = createAsyncThunk<User, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'login',
  async ({email, password}, {dispatch, extra: api}) => {
    const response = await api.post<User>(AppRoutes.Login, {email, password});
    setToken(response.data.token);
    dispatch(fetchFavoritesAction());
    return response.data;
  }
);

export { checkAuthAction, logoutAction, loginAction };
