import { createReducer } from '@reduxjs/toolkit';
import offers from '../mocks/offers';
import detailedOffers from '../mocks/detailedOffers';
import * as actions from './action';
import { Offers, DetailedOffers, CityString, User } from '../types/app-type';
import { SortOptions } from '../const';
import { getCurrentCityOffers } from '../util';
import sort from '../sort';


const initialState = {
  offers: offers,
  detailedOffers: detailedOffers,
  currentCityOffers: getCurrentCityOffers(offers, 'Paris'),
  currentOffer: null,
  currentCity: 'Paris',
  currentSort: 'Popular',
  isAuthorized: false,
  user: null,
} as {
  offers: Offers;
  detailedOffers: DetailedOffers;
  currentCityOffers: Offers;
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
    .addCase(actions.setCurrentOffer, (state, action) => {
      state.currentOffer = action.payload.id;
    });
});

export default reducer;
