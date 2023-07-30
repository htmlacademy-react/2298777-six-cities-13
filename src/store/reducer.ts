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
  isCurrentOfferLoading: false,
  isCommentLoading: false,
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
  isCurrentOfferLoading: boolean;
  isCommentLoading: boolean;
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.setCurrentCity, (state, action) => {
      state.currentCity = action.payload;
      state.currentCityOffers = getCurrentCityOffers(state.offers, action.payload);
      state.currentSort = 'Popular';
    })
    .addCase(actions.setCurrentSort, (state, action) => {
      state.currentSort = action.payload;
      if (action.payload !== 'Popular') {
        state.currentCityOffers = sort(state.currentCityOffers, action.payload);
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
      if (action.payload === AuthorizationStatus.NoAuth) {
        state.favorites = [];
      }
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
    .addCase(actions.setFavoritesAction, (state, action) => {
      state.favorites = action.payload;
      state.offers = state.offers.map((offer) => ({
        ...offer,
        isFavorite: action.payload.some((o) => o.id === offer.id),
      }));
      state.currentCityOffers = state.currentCityOffers.map((offer) => ({
        ...offer,
        isFavorite: action.payload.some((o) => o.id === offer.id),
      }));
    })
    .addCase(actions.setFavoriteAction, (state, action) => {
      const offer = state.offers.find((o) => o.id === action.payload.id);
      if (offer) {
        offer.isPremium = action.payload.isPremium;
        state.favorites.push(offer);
      }
    })
    .addCase(actions.setCurrentOfferLoadingAction, (state, action) => {
      state.isCurrentOfferLoading = action.payload;
    })
    .addCase(actions.setCommentAction, (state, action) => {
      state.comments.push(action.payload);
    })
    .addCase(actions.setCommentLoadingAction, (state, action) => {
      state.isCommentLoading = action.payload;
    })
    .addCase(actions.setDefaultOffersAction, (state) => {
      state.offers = state.offers.map((offer) => ({
        ...offer,
        isFavorite: false,
      }));
      state.currentCityOffers = state.currentCityOffers.map((offer) => ({
        ...offer,
        isFavorite: false,
      }));
    });
});

export default reducer;
