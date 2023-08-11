import { describe } from 'vitest';
import { nearByData } from './near-by-data';

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
