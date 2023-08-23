import { describe } from 'vitest';
import { NameSpace } from '../../../const';
import { getNearByOffers, getIsNearByLoading, getNearByLocations } from './selectors';
import { generateOfferCards } from '../../../util/mock';

describe('near-by-selectors', () => {
  const offers = generateOfferCards();
  const state = {
    [NameSpace.NearBy]: {
      nearByOffers: offers,
      isNearByLoading: false,
      nearByPoints: offers.map((offer) => offer.location),
    },
  };

  it('should return nearByOffers', () => {
    const nearByOffers = state[NameSpace.NearBy].nearByOffers;
    const result = getNearByOffers(state);
    expect(result).toEqual(nearByOffers);
  });

  it('should return isNearByLoading', () => {
    const isNearByLoading = state[NameSpace.NearBy].isNearByLoading;
    const result = getIsNearByLoading(state);
    expect(result).toEqual(isNearByLoading);
  });

  it('should return nearByLocations', () => {
    const nearByLocations = state[NameSpace.NearBy].nearByPoints;
    const result = getNearByLocations(state);
    expect(result).toEqual(nearByLocations);
  });
});
