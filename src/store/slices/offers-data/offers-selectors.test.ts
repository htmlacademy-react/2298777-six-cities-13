import { NameSpace, SortOptions } from '../../../const';
import * as offersSelectors from './selectors';
import { generateOfferCards } from '../../../util/mock';
import { getCurrentCityOffers } from '../../../util/util';
import { CityString, ValueOf } from '../../../types/app-type';

describe('Offers selectors', () => {
  const state = {
    [NameSpace.Offers]: {
      currentCity: 'Paris' as CityString,
      currentSort: 'Popular' as ValueOf<typeof SortOptions>,
      selectedPoint: null,
      currentCityOffers: getCurrentCityOffers(generateOfferCards(), 'Paris'),
      offers: generateOfferCards(),
      points: generateOfferCards().map((offer) => offer.location),
      cityDetailed: generateOfferCards()[0].city,
      currentCityOffersLength: getCurrentCityOffers(generateOfferCards(), 'Paris').length,
      isOffersLoading: false,
      error: null,
    },
  };

  it('should return current city', () => {
    const currentCity = state[NameSpace.Offers].currentCity;
    const result = offersSelectors.getCurrentCity(state);
    expect(result).toEqual(currentCity);
  });

  it('should return current sort', () => {
    const currentSort = state[NameSpace.Offers].currentSort;
    const result = offersSelectors.getCurrentSort(state);
    expect(result).toEqual(currentSort);
  });

  it('should return selected point', () => {
    const selectedPoint = state[NameSpace.Offers].selectedPoint;
    const result = offersSelectors.getSelectedPoint(state);
    expect(result).toEqual(selectedPoint);
  });

  it('should return current city offers', () => {
    const currentCityOffers = state[NameSpace.Offers].currentCityOffers;
    const result = offersSelectors.getCurrentCityOffers(state);
    expect(result).toEqual(currentCityOffers);
  });

  it('should return offers', () => {
    const offers = state[NameSpace.Offers].offers;
    const result = offersSelectors.getOffers(state);
    expect(result).toEqual(offers);
  });

  it('should return points', () => {
    const points = state[NameSpace.Offers].points;
    const result = offersSelectors.getPoints(state);
    expect(result).toEqual(points);
  });

  it('should return city detailed', () => {
    const cityDetailed = state[NameSpace.Offers].cityDetailed;
    const result = offersSelectors.getCityDetailed(state);
    expect(result).toEqual(cityDetailed);
  });

  it('should return current city offers length', () => {
    const currentCityOffersLength = state[NameSpace.Offers].currentCityOffersLength;
    const result = offersSelectors.getCurrentCityOffersLength(state);
    expect(result).toEqual(currentCityOffersLength);
  });

  it('should return loading status', () => {
    const isOffersLoading = state[NameSpace.Offers].isOffersLoading;
    const result = offersSelectors.getIsOffersLoading(state);
    expect(result).toEqual(isOffersLoading);
  });

  it('should return error', () => {
    const error = state[NameSpace.Offers].error;
    const result = offersSelectors.getOffersError(state);
    expect(result).toEqual(error);
  });

  it('should return offer', () => {
    const offers = state[NameSpace.Offers].currentCityOffers;
    for (let i = 0; i < offers.length; i++) {
      const result = offersSelectors.getOffer(state, i);
      expect(result).toEqual(offers[i]);
    }
  });
});
