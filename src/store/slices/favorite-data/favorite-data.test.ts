import { describe } from 'vitest';
import { favoriteData } from './favorite-data';

describe('favorite-slice', () => {
  it('should return initial state with undefined', () => {
    const emptyAction = { type: '' };
    const initialState = {
      favorites: [],
      isFavoritesLoading: false,
      error: null,
    };
    const result = favoriteData.reducer(undefined, emptyAction);
    expect(result).toEqual(initialState);
  });

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const initialState = {
      favorites: [],
      isFavoritesLoading: true,
      error: null,
    };
    const result = favoriteData.reducer(initialState, emptyAction);
    expect(result).toEqual(initialState);
  });
});
