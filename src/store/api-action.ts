import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/store';
import { AxiosInstance, AxiosResponse } from 'axios';
import { APIRoute, AppRoutes, AuthorizationStatus, TIMEOUT_ERROR } from '../const';
import * as action from './action';
import { AuthData, Comments, DetailedOffer, Offers, User, Comment } from '../types/app-type';
import { getToken, removeToken, setToken } from '../services/token';
import store from '.';
import processErrorHandle from '../services/process-error-handle';

const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const response = await api.get<User>(APIRoute.Login, {headers: {'X-Token': getToken()}});
      dispatch(action.requireAuthorization(AuthorizationStatus.Auth));
      dispatch(action.setUserAction(response.data));
    } catch {
      dispatch(action.requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout, {headers: {'X-Token': getToken()}});
    removeToken();
    dispatch(action.setUserAction(null));
    dispatch(action.setDefaultOffersAction());
    dispatch(action.requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(action.setOffersLoadingAction(true));
    let response : AxiosResponse<Offers>;
    const token = getToken();
    try {
      if (token) {
        response = await api.get<Offers>(APIRoute.Offers, {headers: {'X-Token': token}});
      } else {
        response = await api.get<Offers>(APIRoute.Offers);
      }
      dispatch(action.loadOffers(response.data));
    } catch {
      processErrorHandle('error while loading offers');
    }
    dispatch(action.setOffersLoadingAction(false));
  }
);

const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(() => store.dispatch(action.setError(null)),
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
    dispatch(action.setCurrentOfferLoadingAction(true));
    try {
      if (token) {
        response = await api.get<DetailedOffer>(APIRoute.DetailedOffer(id), {headers: {'X-Token': token}});
      } else {
        response = await api.get<DetailedOffer>(APIRoute.DetailedOffer(id));
      }
      dispatch(action.setCurrentOfferAction(response.data));
    } catch {
      processErrorHandle('error while loading offer');
    }
    dispatch(action.setCurrentOfferLoadingAction(false));
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
      response = await api.get<Offers>(APIRoute.OffersNearby(id), {headers: {'X-Token': token}});
    } else {
      response = await api.get<Offers>(APIRoute.OffersNearby(id));
    }
    dispatch(action.setNearByOffersAction(response.data));
  }
);

const fetchCommentsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchComments',
  async (id, {dispatch, extra: api}) => {
    try {
      const response = await api.get<Comments>(APIRoute.Comments(id));
      dispatch(action.setCommentsAction(response.data));
    } catch {
      processErrorHandle('error while loading comments');
    }
  }
);

const fetchFavoritesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFavorites',
  async (_arg, {dispatch, extra: api}) => {
    const token = getToken();
    if (token) {
      try {
        const response = await api.get<Offers>(APIRoute.Favorite, {headers: {'X-Token': token}});
        dispatch(action.setFavoritesAction(response.data));
      } catch {
        processErrorHandle('error while loading favorites');
      }
    }
  }
);

const postFavoriteAction = createAsyncThunk<void, {offerId: string; status: boolean}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'postFavorite',
  async ({offerId, status}, {dispatch, extra: api}) => {
    const token = getToken();
    if (token) {
      try {
        const response = await api.post<DetailedOffer>(APIRoute.postFavorite(offerId, +status), {}, {headers: {'X-Token': token}});
        dispatch(action.setFavoriteAction(response.data));
      } catch {
        processErrorHandle('error');
      }
    }
  }
);

const postCommentAction = createAsyncThunk<void, {comment: string; rating: number; offerId: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'postComment',
  async ({comment, rating, offerId}, {dispatch, extra: api}) => {
    dispatch(action.setCommentLoadingAction(true));
    const token = getToken();
    if (token) {
      try {
        const response = await api.post<Comment>(APIRoute.Comments(offerId), {comment, rating}, {headers: {'X-Token': token}});
        dispatch(action.setCommentAction(response.data));
      } catch {
        processErrorHandle('error while posting comment');
      }
    }
    dispatch(action.setCommentLoadingAction(false));
  }
);

const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'login',
  async ({email, password}, {dispatch, extra: api}) => {
    const response = await api.post<User>(AppRoutes.Login, {email, password});
    dispatch(action.setUserAction(response.data));
    setToken(response.data.token);
    dispatch(fetchFavoritesAction());
    dispatch(action.requireAuthorization(AuthorizationStatus.Auth));
  }
);


export {checkAuthAction, loginAction, logoutAction, fetchOffersAction, clearErrorAction,
  fetchCurrentOfferAction, fetchNearByPlacesAction, fetchCommentsAction, fetchFavoritesAction,
  postFavoriteAction, postCommentAction };
