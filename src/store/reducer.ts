import { createReducer } from '@reduxjs/toolkit';
import * as actions from './action';
import { Offers, DetailedOffer, CityString, ValueOf, User, Comments } from '../types/app-type';
import { Cities, SortOptions } from '../const';
import { getCurrentCityOffers } from '../util';
import sort from '../sort';
import { AuthorizationStatus } from '../const';


const initialState = {
  offers: [],
  currentCityOffers: [],
  currentOffer: null,
  nearByOffers: [],
  comments: [],
  favorites: [],
  currentCity: Cities.Paris,
  currentSort: SortOptions.Popular,
  authStatus: AuthorizationStatus.Unknown,
  error: null,
  isOffersLoading: false,
  user: null,
  currentOfferLoading: false,
} as {
  offers: Offers;
  currentCityOffers: Offers;
  currentOffer: null | DetailedOffer;
  nearByOffers: Offers;
  comments: Comments;
  favorites: Offers;
  currentCity: CityString;
  currentSort: ValueOf<typeof SortOptions>;
  authStatus: ValueOf<typeof AuthorizationStatus>;
  error: null | string;
  isOffersLoading: boolean;
  user: null | User;
  currentOfferLoading: boolean;
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.setCurrentCity, (state, action) => {
      state.currentCity = action.payload.city;
      state.currentCityOffers = getCurrentCityOffers(state.offers, action.payload.city);
      state.currentSort = 'Popular';
    })
    .addCase(actions.setCurrentSort, (state, action) => {
      state.currentSort = action.payload.sort;
      if (action.payload.sort !== 'Popular') {
        state.currentCityOffers = sort(state.currentCityOffers, action.payload.sort);
      } else {
        state.currentCityOffers = getCurrentCityOffers(state.offers, state.currentCity);
      }
    })
    .addCase(actions.loadOffers, (state, action) => {
      state.offers = action.payload;
      state.currentCityOffers = getCurrentCityOffers(action.payload, state.currentCity);
    })
    .addCase(actions.requireAuthorization, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(actions.setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(actions.setOffersLoadingAction, (state, action) => {
      state.isOffersLoading = action.payload;
    })
    .addCase(actions.setUserAction, (state, action) => {
      state.user = action.payload;
    })
    .addCase(actions.setFavoriteAction, (state, action) => {
      const offer = state.offers.find((o) => o.id === action.payload);
      if (offer) {
        offer.isFavorite = !offer.isFavorite;
      }
    })
    .addCase(actions.setCurrentOfferAction, (state, action) => {
      state.currentOffer = action.payload;
      state.currentCity = action.payload.city.name;
    })
    .addCase(actions.setNearByOffersAction, (state, action) => {
      state.nearByOffers = action.payload;
    })
    .addCase(actions.setCommentsAction, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(actions.setCurrentOfferLoadingAction, (state, action) => {
      state.currentOfferLoading = action.payload;
    });
});

export default reducer;
