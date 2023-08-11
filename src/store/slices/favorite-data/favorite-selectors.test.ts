import { describe } from 'vitest';
import { NameSpace } from '../../../const';
import { generateOfferCards } from '../../../util/mock';
import { getFavorites, getFavoritesError, getIsFavoritesLoading } from './selectors';


describe('favorite-selectors', () => {
  const state = {
    [NameSpace.Favorites]: {
      favorites: generateOfferCards(),
      isFavoritesLoading: false,
      error: null,
    },
  };

  it('should return favorites', () => {
    const favorites = state[NameSpace.Favorites].favorites;
    const result = getFavorites(state);
    expect(result).toEqual(favorites);
  });

  it('should return isFavoritesLoading', () => {
    const isFavoritesLoading = state[NameSpace.Favorites].isFavoritesLoading;
    const result = getIsFavoritesLoading(state);
    expect(result).toEqual(isFavoritesLoading);
  });

  it('should return error', () => {
    const error = state[NameSpace.Favorites].error;
    const result = getFavoritesError(state);
    expect(result).toEqual(error);
  });
});
