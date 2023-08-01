import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/store';
import { AxiosInstance } from 'axios';
import { APIRoute, AppRoutes } from '../const';
import { AuthData, Comments, DetailedOffer, Offers, User, Comment } from '../types/app-type';
import { setToken } from '../services/token';

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

const fetchOffersAction = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffers',
  async (_arg, {extra: api}) => {
    const response = await api.get<Offers>(APIRoute.Offers);
    return response.data;
  }
);

const fetchCurrentOfferAction = createAsyncThunk<DetailedOffer, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchCurrentOffer',
  async (id, {extra: api}) => {
    const response = await api.get<DetailedOffer>(APIRoute.DetailedOffer(id));
    return response.data;
  }
);

const fetchNearByPlacesAction = createAsyncThunk<Offers, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchNearByPlaces',
  async (id, {extra: api}) => {
    const response = await api.get<Offers>(APIRoute.OffersNearby(id));
    return response.data;
  }
);

const fetchCommentsAction = createAsyncThunk<Comments, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchComments',
  async (id, {extra: api}) => {
    const response = await api.get<Comments>(APIRoute.Comments(id));
    return response.data;
  }
);

const fetchFavoritesAction = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFavorites',
  async (_arg, {extra: api}) => {
    const response = await api.get<Offers>(APIRoute.Favorite);
    return response.data;
  }
);

const postFavoriteAction = createAsyncThunk<DetailedOffer, {offerId: string; status: boolean}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'postFavorite',
  async ({offerId, status}, {extra: api}) => {
    const response = await api.post<DetailedOffer>(APIRoute.postFavorite(offerId, +status));
    return response.data;
  }
);

const postCommentAction = createAsyncThunk<Comment, {comment: string; rating: number; offerId: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'postComment',
  async ({comment, rating, offerId}, {extra: api}) => {
    const response = await api.post<Comment>(APIRoute.Comments(offerId), {comment, rating});
    return response.data;
  }
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


export {checkAuthAction, loginAction, logoutAction, fetchOffersAction,
  fetchCurrentOfferAction, fetchNearByPlacesAction, fetchCommentsAction, fetchFavoritesAction,
  postFavoriteAction, postCommentAction };
