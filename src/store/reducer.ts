import { createReducer } from '@reduxjs/toolkit';
import offers from '../mocks/offers';
import detailedOffers from '../mocks/detailedOffers';
import * as actions from './action';
import { Offers, DetailedOffers, CityString, User } from '../types/app-type';
import { SortOptions } from '../const';


const initialState = {
  offers: offers,
  detailedOffers: detailedOffers,
  currentCityOffers: null,
  currentOffer: null,
  currentCity: 'Paris',
  currentSort: 'Popular',
  isAuthorized: false,
  user: null,
} as {
  offers: Offers;
  detailedOffers: DetailedOffers;
  currentCityOffers: Offers | null;
  currentOffer: string | null;
  currentCity: CityString;
  currentSort: keyof typeof SortOptions;
  isAuthorized: boolean;
  user: null | User;
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.setCurrentCity, (state, action) => {
      state.currentCity = action.payload.city;
    })
    .addCase(actions.setCurrentSort, (state, action) => {
      state.currentSort = action.payload.sort;
    })
    .addCase(actions.setCurrentOffer, (state, action) => {
      state.currentOffer = action.payload.id;
    });
});

export default reducer;
