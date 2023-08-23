import { describe } from 'vitest';
import { nearByData } from './near-by-data';
import { generateOfferCards } from '../../../util/mock';
import { fetchNearByPlacesAction } from '../../api-actions/offer';
import { Offers } from '../../../types/app-type';

describe('nearBy-slice', () => {
  it('should return initial state with undefined', () => {
    const emptyAction = { type: '' };
    const initialState = {
      nearByOffers: [],
      isNearByLoading: false,
      nearByPoints: [],
    };
    const result = nearByData.reducer(undefined, emptyAction);
    expect(result).toEqual(initialState);
  });

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const initialState = {
      nearByOffers: [],
      isNearByLoading: true,
      nearByPoints: [],
    };
    const result = nearByData.reducer(initialState, emptyAction);
    expect(result).toEqual(initialState);
  });
});

describe('nearBy-slice async', () => {
  it('should change nearByOffers with fetchNearByOffers.fulfilled', () => {
    const nearByOffers : Offers = [];
    const offers = generateOfferCards();
    while (nearByOffers.length < 3) {
      const randomIndex = Math.floor(Math.random() * offers.length);
      if (!nearByOffers.includes(offers[randomIndex])) {
        nearByOffers.push(offers[randomIndex]);
      }
    }
    const stateForCheck = {
      nearByOffers: nearByOffers,
      isNearByLoading: false,
      nearByPoints: nearByOffers.map((o) => o.location),
    };
    const result = nearByData.reducer(undefined, fetchNearByPlacesAction.fulfilled(offers, '1', '1'));
    expect(result.nearByPoints.length).toEqual(stateForCheck.nearByPoints.length);
  });

  it('should change isNearByLoading with fetchNearByOffers.pending', () => {
    const stateForCheck = {
      nearByOffers: [],
      isNearByLoading: true,
      nearByPoints: [],
    };
    const result = nearByData.reducer(undefined, fetchNearByPlacesAction.pending);
    expect(result).toEqual(stateForCheck);
  });

  it('should change isNearByLoading with fetchNearByOffers.rejected', () => {
    const stateForCheck = {
      nearByOffers: [],
      isNearByLoading: false,
      nearByPoints: [],
    };
    const result = nearByData.reducer(undefined, fetchNearByPlacesAction.rejected);
    expect(result).toEqual(stateForCheck);
  });
});
