import { SortOptions } from '../../../const';
import { CityString, ValueOf } from '../../../types/app-type';
import { changeRandomFavoriteStatus, createDetailedOfferFromOffer, generateOfferCards } from '../../../util/mock';
import { offersData } from './offers-data';
import { getCurrentCityOffers } from '../../../util/util';
import sort from '../../../sort';
import { describe } from 'vitest';
import { fetchCurrentOfferAction, fetchOffersAction } from '../../api-actions/offer';
import { fetchFavoritesAction, postFavoriteAction } from '../../api-actions/favorite';
import { logoutAction } from '../../api-actions/user';

describe('Offers data slice', () => {
  const offers = generateOfferCards();
  const initialState = {
    currentCity: 'Amsterdam' as CityString,
    currentSort: 'Price: high to low' as ValueOf<typeof SortOptions>,
    selectedPoint: null,
    currentCityOffers: sort(getCurrentCityOffers(offers, 'Amsterdam'), 'Price: high to low'),
    offers: offers,
    points: offers.map((offer) => offer.location),
    cityDetailed: offers[0].city,
    currentCityOffersLength: getCurrentCityOffers(offers, 'Amsterdam').length,
    isOffersLoading: false,
    error: null,
  };

  it('should return initial state with undefined', () => {
    const emptyAction = { type: '' };
    const stateForCheck = {
      currentCity: 'Paris',
      currentSort: 'Popular',
      selectedPoint: null,
      currentCityOffers: [],
      offers: [],
      points: [],
      cityDetailed: null,
      currentCityOffersLength: 0,
      isOffersLoading: false,
      error: null,
    };
    const result = offersData.reducer(undefined, emptyAction);
    expect(result).toEqual(stateForCheck);
  });

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const result = offersData.reducer(initialState, emptyAction);
    expect(result).toEqual(initialState);
  });

  it('should change current city', () => {
    const result = offersData.reducer(initialState, offersData.actions.setCurrentCity('Paris'));
    const currentCityOffer = getCurrentCityOffers(initialState.offers, 'Paris');
    expect(result.currentCity).toEqual('Paris');
    expect(result.currentCityOffers).toEqual(currentCityOffer);
    expect(result.currentCityOffersLength).toEqual(currentCityOffer.length);
    expect(result.points).toEqual(currentCityOffer.map((offer) => offer.location));
    if (currentCityOffer.length > 0) {
      expect(result.cityDetailed).toEqual(currentCityOffer[0].city);
    } else {
      expect(result.cityDetailed).toEqual(null);
    }
    expect(result.currentSort).toEqual('Popular');
  });

  it('should change current sort Popular', () => {
    const currentCityOffer = getCurrentCityOffers(initialState.offers, 'Amsterdam');
    const result = offersData.reducer(initialState, offersData.actions.setCurrentSort('Popular'));
    expect(result.currentSort).toEqual('Popular');
    expect(result.currentCityOffers).toEqual(currentCityOffer);
  });

  it('should change current sort Price: high to low', () => {
    const result = offersData.reducer(initialState, offersData.actions.setCurrentSort('Price: high to low'));
    expect(result.currentSort).toEqual('Price: high to low');
    expect(result.currentCityOffers).toEqual(initialState.currentCityOffers);
  });

  it('should change current sort Price: low to high', () => {
    const result = offersData.reducer(initialState, offersData.actions.setCurrentSort('Price: low to high'));
    expect(result.currentSort).toEqual('Price: low to high');
    expect(result.currentCityOffers).toEqual(sort(initialState.currentCityOffers, 'Price: low to high'));
  });

  it('should change current sort Top rated first', () => {
    const result = offersData.reducer(initialState, offersData.actions.setCurrentSort('Top rated first'));
    expect(result.currentSort).toEqual('Top rated first');
    expect(result.currentCityOffers).toEqual(sort(initialState.currentCityOffers, 'Top rated first'));
  });

  it('should change selected point', () => {
    const result = offersData.reducer(initialState, offersData.actions.setSelectedPoint(offers[0].location));
    expect(result.selectedPoint).toEqual(offers[0].location);
  });
});

describe('Offers data slice async actions', () => {
  const offers = generateOfferCards();
  const initialState = {
    currentCity: 'Amsterdam' as CityString,
    currentSort: 'Price: high to low' as ValueOf<typeof SortOptions>,
    selectedPoint: null,
    currentCityOffers: sort(getCurrentCityOffers(offers, 'Amsterdam'), 'Price: high to low'),
    offers: offers,
    points: offers.map((offer) => offer.location),
    cityDetailed: offers[0].city,
    currentCityOffersLength: getCurrentCityOffers(offers, 'Amsterdam').length,
    isOffersLoading: false,
    error: null,
  };

  it('should set offers loading with fetchOffersAction.pending', () => {
    const result = offersData.reducer(initialState, fetchOffersAction.pending);
    expect(result.isOffersLoading).toEqual(true);
  });

  it('should set offers loading error if error not 401 with fetchOffersAction.rejected', () => {
    const result = offersData.reducer(initialState, fetchOffersAction.rejected(
      new Error('Error 400'), 'Error 400', undefined,
    ));
    expect(result.offers).toEqual([]);
    expect(result.currentCityOffers).toEqual([]);
    expect(result.points).toEqual([]);
    expect(result.cityDetailed).toEqual(null);
    expect(result.currentCityOffersLength).toEqual(0);
    expect(result.isOffersLoading).toEqual(false);
    expect(result.error).toEqual('Error while fetching offers');
  });

  it('should not set offers loading error if error 401 with fetchOffersAction.rejected', () => {
    const result = offersData.reducer(initialState, fetchOffersAction.rejected(
      new Error('Error 401'), 'Error 401', undefined,
    ));
    expect(result.offers).toEqual([]);
    expect(result.currentCityOffers).toEqual([]);
    expect(result.points).toEqual([]);
    expect(result.cityDetailed).toEqual(null);
    expect(result.currentCityOffersLength).toEqual(0);
    expect(result.isOffersLoading).toEqual(false);
    expect(result.error).toEqual(null);
  });

  it('should set offers with fetchOffersAction.fulfilled', () => {
    const generatedOffers = generateOfferCards();
    const result = offersData.reducer(initialState, fetchOffersAction.fulfilled(generatedOffers, '1', undefined));
    expect(result.offers).toEqual(generatedOffers);
    expect(result.currentCityOffers).toEqual(getCurrentCityOffers(generatedOffers, 'Amsterdam'));
    expect(result.points).toEqual(getCurrentCityOffers(generatedOffers, 'Amsterdam').map((offer) => offer.location));
    if (getCurrentCityOffers(generatedOffers, 'Amsterdam').length > 0) {
      expect(result.cityDetailed).toEqual(getCurrentCityOffers(generatedOffers, 'Amsterdam')[0].city);
    } else {
      expect(result.cityDetailed).toEqual(null);
    }
    expect(result.currentCityOffersLength).toEqual(getCurrentCityOffers(generatedOffers, 'Amsterdam').length);
    expect(result.isOffersLoading).toEqual(false);
    expect(result.error).toEqual(null);
  });

  it('should change favorite status in offers with fetchFavoritesAction.fulfilled', () => {
    const favorites = changeRandomFavoriteStatus(offers);
    const result = offersData.reducer(initialState, fetchFavoritesAction.fulfilled(favorites, '1', undefined));
    expect(result.offers).toEqual(favorites);
    expect(result.currentCityOffers).toEqual(sort(getCurrentCityOffers(favorites, 'Amsterdam'), initialState.currentSort));
  });

  it('should change favorite status in offers with logoutAction.fulfilled', () => {
    const defaultOffers = initialState.offers.map((offer) => ({ ...offer, isFavorite: false }));
    const defaultCurrentCityOffers = initialState.currentCityOffers.map((offer) => ({ ...offer, isFavorite: false }));
    const result = offersData.reducer(initialState, logoutAction.fulfilled);
    expect(result.offers).toEqual(defaultOffers);
    expect(result.currentCityOffers).toEqual(defaultCurrentCityOffers);
  });

  it('should change favorite status in offers with postFavoriteAction.fulfilled', () => {
    const favorite = createDetailedOfferFromOffer(offers[Math.floor(Math.random() * offers.length)]);
    const favoriteOffer = { ...favorite, isFavorite: favorite.isFavorite };
    const result = offersData.reducer(initialState,
      postFavoriteAction.fulfilled(favoriteOffer, '1',
        {offerId: favoriteOffer.id, status: favoriteOffer.isFavorite})
    );
    const checkOffers = offers.map((offer) => offer.id === favoriteOffer.id ? {
      ...offer,
      isFavorite: favoriteOffer.isFavorite,
    } : offer);
    expect(result.offers).toEqual(checkOffers);
    expect(result.currentCityOffers).toEqual(sort(getCurrentCityOffers(checkOffers, 'Amsterdam'), initialState.currentSort));
  });

  it('should change state with fetchCurrentOfferAction.fulfilled', () => {
    const currentOffer = createDetailedOfferFromOffer(offers[Math.floor(Math.random() * offers.length)]);
    const result = offersData.reducer(initialState, fetchCurrentOfferAction.fulfilled(currentOffer, '1', '1'));
    expect(result.currentCity).toEqual(currentOffer.city.name);
    expect(result.currentCityOffers).toEqual(getCurrentCityOffers(offers, currentOffer.city.name));
    expect(result.currentCityOffersLength).toEqual(getCurrentCityOffers(offers, currentOffer.city.name).length);
    expect(result.cityDetailed).toEqual(getCurrentCityOffers(offers, currentOffer.city.name)[0].city);
    expect(result.isOffersLoading).toEqual(false);
    expect(result.error).toEqual(null);
  });
});
