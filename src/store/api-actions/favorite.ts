import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { State } from '../../types/store';
import { APIRoute } from '../../const';
import { Offers, DetailedOffer } from '../../types/app-type';
import { AppDispatch } from '../../types/store';

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

export {fetchFavoritesAction, postFavoriteAction };
