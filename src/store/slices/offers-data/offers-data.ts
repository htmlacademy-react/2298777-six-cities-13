import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace, SortOptions } from '../../../const';
import { City, CityString, Offers, ValueOf, Location } from '../../../types/app-type';
import { logoutAction } from '../../api-actions/user';
import { getCurrentCityOffers, parseStatusCode } from '../../../util/util';
import sort from '../../../sort';
import { StatusCodes } from 'http-status-codes';
import { fetchFavoritesAction, postFavoriteAction } from '../../api-actions/favorite';
import { fetchCurrentOfferAction, fetchOffersAction } from '../../api-actions/offer';

const initialState = {
  currentCity: 'Paris',
  currentSort: 'Popular',
  selectedPoint: null,
  currentCityOffers: [],
  offers: [],
  points: [],
  cityDetailed: null,
  currentCityOffersLength: 0,
  isOffersLoading: false,
  error: null,
} as {
  currentCity: CityString;
  currentSort: ValueOf<typeof SortOptions>;
  selectedPoint: null | Location;
  currentCityOffers: Offers;
  offers: Offers;
  points: Location[];
  cityDetailed: null | City;
  currentCityOffersLength: number;
  isOffersLoading: boolean;
  error: null | string;
};

export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setCurrentCity: (state, action : PayloadAction<CityString>) => {
      state.currentCity = action.payload;
      state.currentCityOffers = getCurrentCityOffers(state.offers, state.currentCity);
      state.currentCityOffersLength = state.currentCityOffers.length;
      state.points = state.currentCityOffers.map((offer) => offer.location);
      if (state.currentCityOffersLength === 0) {
        state.cityDetailed = null;
      } else {
        state.cityDetailed = state.currentCityOffers[0].city;
      }
      state.currentSort = 'Popular';
    },
    setCurrentSort: (state, action : PayloadAction<ValueOf<typeof SortOptions>>) => {
      state.currentSort = action.payload;
      if (action.payload !== 'Popular') {
        state.currentCityOffers = sort(state.currentCityOffers, action.payload);
      } else {
        state.currentCityOffers = getCurrentCityOffers(state.offers, state.currentCity);
      }
    },
    setSelectedPoint: (state, action : PayloadAction<Location | null>) => {
      state.selectedPoint = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.currentCityOffers = getCurrentCityOffers(state.offers, state.currentCity);
        state.currentCityOffersLength = state.currentCityOffers.length;
        state.points = state.currentCityOffers.map((offer) => offer.location);
        if (state.currentCityOffersLength > 0) {
          state.cityDetailed = state.currentCityOffers[0].city;
        } else {
          state.cityDetailed = null;
        }
        state.isOffersLoading = false;
        state.error = null;
      })
      .addCase(fetchOffersAction.rejected, (state, action) => {
        state.offers = [];
        state.currentCityOffers = [];
        state.currentCityOffersLength = 0;
        state.points = [];
        state.cityDetailed = null;
        state.isOffersLoading = false;
        if (action.error.message && parseStatusCode(action.error.message) !== StatusCodes.UNAUTHORIZED) {
          state.error = 'Error while fetching offers';
        }
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.offers = state.offers.map((offer) => ({
          ...offer,
          isFavorite: action.payload.find((o) => o.id === offer.id)?.isFavorite || false,
        }));
        state.currentCityOffers = state.currentCityOffers.map((offer) => ({
          ...offer,
          isFavorite: action.payload.find((o) => o.id === offer.id)?.isFavorite || false,
        }));
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.offers = state.offers.map((offer) => ({
          ...offer,
          isFavorite: false,
        }));
        state.currentCityOffers = state.currentCityOffers.map((offer) => ({
          ...offer,
          isFavorite: false,
        }));
      })
      .addCase(postFavoriteAction.fulfilled, (state, action) => {
        const offer = state.offers.find((o) => o.id === action.payload.id);
        const currentCityOffer = state.currentCityOffers.find((o) => o.id === action.payload.id);
        if (offer) {
          offer.isFavorite = action.payload.isFavorite;
        }
        if (currentCityOffer) {
          currentCityOffer.isFavorite = action.payload.isFavorite;
        }
      })
      .addCase(fetchCurrentOfferAction.fulfilled, (state, action) => {
        state.selectedPoint = action.payload.location;
        state.currentCity = action.payload.city.name;
        state.currentCityOffers = getCurrentCityOffers(state.offers, state.currentCity);
        state.currentCityOffersLength = state.currentCityOffers.length;
        state.points = state.currentCityOffers.map((offer) => offer.location);
        if (state.currentCityOffersLength) {
          state.cityDetailed = state.currentCityOffers[0].city;
        }
      });
  },
});
