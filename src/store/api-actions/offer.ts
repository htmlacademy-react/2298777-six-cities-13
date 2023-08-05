import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { State } from '../../types/store';
import { APIRoute } from '../../const';
import { Offers, DetailedOffer } from '../../types/app-type';
import { AppDispatch } from '../../types/store';

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

export {fetchOffersAction, fetchCurrentOfferAction, fetchNearByPlacesAction};
