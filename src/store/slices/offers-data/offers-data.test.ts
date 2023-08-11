import { SortOptions } from '../../../const';
import { CityString, ValueOf } from '../../../types/app-type';
import { generateOfferCards } from '../../../util/mock';
import { offersData } from './offers-data';
import { getCurrentCityOffers } from '../../../util/util';
import sort from '../../../sort';

describe('Offers data slice', () => {
  const offers = generateOfferCards();
  const initialState = {
    currentCity: 'Amsterdam' as CityString,
    currentSort: 'Price: high to low' as ValueOf<typeof SortOptions>,
    selectedPoint: null,
    currentCityOffers: sort(getCurrentCityOffers(offers, 'Paris'), 'Price: high to low'),
    offers: offers,
    points: offers.map((offer) => offer.location),
    cityDetailed: offers[0].city,
    currentCityOffersLength: getCurrentCityOffers(offers, 'Paris').length,
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
    expect(result.currentCity).toEqual('Paris');
    expect(result.currentCityOffers).toEqual(getCurrentCityOffers(initialState.offers, 'Paris'));
    expect(result.currentCityOffersLength).toEqual(getCurrentCityOffers(initialState.offers, 'Paris').length);
    expect(result.points).toEqual(getCurrentCityOffers(initialState.offers, 'Paris').map((offer) => offer.location));
    expect(result.cityDetailed).toEqual(getCurrentCityOffers(initialState.offers, 'Paris')[0].city);
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
