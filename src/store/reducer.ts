import { createReducer } from '@reduxjs/toolkit';
import * as actions from './action';
import { Offers, DetailedOffer, CityString, ValueOf, User, Comments, Location, City } from '../types/app-type';
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
  selectedPoint: null,
  currentCityOffersLength: 0,
  points: [],
  cityDetailed: null,
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
  selectedPoint: null | Location;
  currentCityOffersLength: number;
  points: Location[];
  cityDetailed: null | City;
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.setCurrentCity, (state, action) => {
      state.currentCity = action.payload;
      state.currentCityOffers = getCurrentCityOffers(state.offers, action.payload);
      state.currentCityOffersLength = state.currentCityOffers.length;
      state.currentSort = 'Popular';
      state.points = state.currentCityOffers.map((offer) => offer.location);
      state.cityDetailed = state.currentCityOffers[0].city;
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
      state.currentCityOffersLength = state.currentCityOffers.length;
      state.points = state.currentCityOffers.map((offer) => offer.location);
      state.cityDetailed = state.currentCityOffers[0].city;
    })
    .addCase(actions.requireAuthorization, (state, action) => {
      state.authStatus = action.payload;
      if (action.payload === AuthorizationStatus.NoAuth) {
        state.favorites = [];
        if (state.currentOffer) {
          state.currentOffer = {
            ...state.currentOffer,
            isFavorite: false,
          };
        }
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
      if (!offer) {
        return;
      }
      state.offers = state.offers.map((o) => o.id === offer.id ? action.payload : o);
      state.currentCityOffers = getCurrentCityOffers(state.offers, state.currentCity);
      if (action.payload.isFavorite) {
        state.favorites.push(action.payload);
      } else {
        state.favorites = state.favorites.filter((o) => o.id !== offer.id);
      }
      if (state.currentOffer?.id === offer.id) {
        state.currentOffer = action.payload;
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
    })
    .addCase(actions.setSelectedPointAction, (state, action) => {
      state.selectedPoint = action.payload;
    });
});

export default reducer;
