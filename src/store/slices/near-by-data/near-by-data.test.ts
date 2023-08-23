import { describe } from 'vitest';
import { nearByData } from './near-by-data';
import { generateOfferCards } from '../../../util/mock';
import { fetchNearByPlacesAction } from '../../api-actions/offer';

describe('nearBy-slice', () => {
  it('should return initial state with undefined', () => {
    const emptyAction = { type: '' };
    const initialState = {
      nearByOffers: [],
      isNearByLoading: false,
    };
    const result = nearByData.reducer(undefined, emptyAction);
    expect(result).toEqual(initialState);
  });

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const initialState = {
      nearByOffers: [],
      isNearByLoading: true,
    };
    const result = nearByData.reducer(initialState, emptyAction);
    expect(result).toEqual(initialState);
  });
});

describe('nearBy-slice async', () => {
  it('should change nearByOffers with fetchNearByOffers.fulfilled', () => {
    const offers = generateOfferCards();
    const stateForCheck = {
      nearByOffers: offers,
      isNearByLoading: false,
    };
    const result = nearByData.reducer(undefined, fetchNearByPlacesAction.fulfilled(offers, '1', '1'));
    expect(result).toEqual(stateForCheck);
  });

  it('should change isNearByLoading with fetchNearByOffers.pending', () => {
    const stateForCheck = {
      nearByOffers: [],
      isNearByLoading: true,
    };
    const result = nearByData.reducer(undefined, fetchNearByPlacesAction.pending);
    expect(result).toEqual(stateForCheck);
  });

  it('should change isNearByLoading with fetchNearByOffers.rejected', () => {
    const stateForCheck = {
      nearByOffers: [],
      isNearByLoading: false,
    };
    const result = nearByData.reducer(undefined, fetchNearByPlacesAction.rejected);
    expect(result).toEqual(stateForCheck);
  });
});
