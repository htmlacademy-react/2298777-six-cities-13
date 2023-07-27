import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/store';
import { AxiosInstance, AxiosResponse } from 'axios';
import { APIRoute, AppRoutes, AuthorizationStatus, TIMEOUT_ERROR } from '../const';
import { loadOffers, requireAuthorization, setUserAction, setError, setOffersLoadingAction, setCurrentOfferAction, setNearByOffersAction, setCommentsAction } from './action';
import { AuthData, Comments, DetailedOffer, Offers, User } from '../types/app-type';
import { getToken, removeToken, setToken } from '../services/token';
import store from '.';

const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const response = await api.get<User>(APIRoute.Login, {headers: {'X-Token': getToken()}});
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setUserAction(response.data));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'login',
  async ({email, password}, {dispatch, extra: api}) => {
    const response = await api.post<User>(AppRoutes.Login, {email, password});
    dispatch(setUserAction(response.data));
    setToken(response.data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  }
);

const logoutAction = createAsyncThunk<void, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'logout',
  async ({dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout, {headers: {'X-Token': getToken()}});
    removeToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersLoadingAction(true));
    const {data} = await api.get<Offers>(APIRoute.Offers);
    dispatch(loadOffers(data));
    dispatch(setOffersLoadingAction(false));
  }
);

const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(() => store.dispatch(setError(null)),
      TIMEOUT_ERROR,
    );
  },
);

const fetchCurrentOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchCurrentOffer',
  async (id, {dispatch, extra: api}) => {
    const token = getToken();
    let response : AxiosResponse<DetailedOffer>;
    dispatch(setOffersLoadingAction(true));
    if (token) {
      response = await api.get<DetailedOffer>(APIRoute.DetailedOffer(id), {headers: {'X-Token': getToken()}});
    } else {
      response = await api.get<DetailedOffer>(APIRoute.DetailedOffer(id));
    }
    dispatch(setOffersLoadingAction(false));
    dispatch(setCurrentOfferAction(response.data));
  }
);

const fetchNearByPlacesAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchNearByPlaces',
  async (id, {dispatch, extra: api}) => {
    const token = getToken();
    let response : AxiosResponse<Offers>;
    if (token) {
      response = await api.get<Offers>(APIRoute.OffersNearby(id), {headers: {'X-Token': getToken()}});
    } else {
      response = await api.get<Offers>(APIRoute.OffersNearby(id));
    }
    dispatch(setNearByOffersAction(response.data));
  }
);

const fetchCommentsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchComments',
  async (id, {dispatch, extra: api}) => {
    const response = await api.get<Comments>(APIRoute.Comments(id));
    dispatch(setCommentsAction(response.data));
  }
);

export {checkAuthAction, loginAction, logoutAction, fetchOffersAction, clearErrorAction,
  fetchCurrentOfferAction, fetchNearByPlacesAction, fetchCommentsAction};
