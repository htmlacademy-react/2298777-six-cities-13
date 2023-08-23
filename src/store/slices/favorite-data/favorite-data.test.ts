import { describe } from 'vitest';
import { favoriteData } from './favorite-data';
import { generateDetailOffer, generateOfferCards } from '../../../util/mock';
import { fetchFavoritesAction, postFavoriteAction } from '../../api-actions/favorite';
import { Offer } from '../../../types/app-type';

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

describe('favorite-slice async', () => {
  it ('should change favorites with fetchFavoritesAction.fulfilled', () => {
    const offers = generateOfferCards();
    const stateForCheck = {
      favorites: offers,
      isFavoritesLoading: false,
      error: null,
    };
    const result = favoriteData.reducer(undefined, fetchFavoritesAction.fulfilled(offers, '', undefined));
    expect(result).toEqual(stateForCheck);
  });

  it ('should change favorites with fetchFavoritesAction.rejected', () => {
    const stateForCheck = {
      favorites: [],
      isFavoritesLoading: false,
      error: null,
    };
    const result = favoriteData.reducer(undefined, fetchFavoritesAction.rejected(new Error(), '', undefined));
    expect(result).toEqual(stateForCheck);
  });

  it ('should change favorites with fetchFavoritesAction.pending', () => {
    const stateForCheck = {
      favorites: [],
      isFavoritesLoading: true,
      error: null,
    };
    const result = favoriteData.reducer(undefined, fetchFavoritesAction.pending('', undefined));
    expect(result).toEqual(stateForCheck);
  });

  it('should delete favorite with postFavoriteAction.fulfilled', () => {
    const offer = {...generateDetailOffer(), isFavorite: false};
    const offers = generateOfferCards();
    const originalOffer : Offer = {
      type: offer.type,
      id: offer.id,
      city: offer.city,
      previewImage: offer.images[0],
      title: offer.title,
      price: offer.price,
      rating: offer.rating,
      isFavorite: offer.isFavorite,
      isPremium: offer.isPremium,
      location: offer.location,
    };
    offers.push(originalOffer);
    const initialState = {
      favorites: offers,
      isFavoritesLoading: false,
      error: null,
    };
    const result = favoriteData.reducer(initialState, postFavoriteAction.fulfilled(offer, '', { offerId: '', status: true }));
    expect(result.favorites).toEqual(offers.filter((o) => o.id !== offer.id));
  });

  it('should add favorite with postFavoriteAction.fulfilled', () => {
    const offer = {...generateDetailOffer(), isFavorite: true};
    const offers = generateOfferCards();
    const originalOffer : Offer = {
      type: offer.type,
      id: offer.id,
      city: offer.city,
      previewImage: offer.images[0],
      title: offer.title,
      price: offer.price,
      rating: offer.rating,
      isFavorite: offer.isFavorite,
      isPremium: offer.isPremium,
      location: offer.location,
    };
    const initialState = {
      favorites: offers,
      isFavoritesLoading: false,
      error: null,
    };
    const result = favoriteData.reducer(initialState, postFavoriteAction.fulfilled(offer, '', { offerId: '', status: true }));
    expect(result.favorites).toEqual([...offers, originalOffer]);
  });
});
