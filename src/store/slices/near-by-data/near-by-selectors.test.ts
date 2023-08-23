import { describe } from 'vitest';
import { NameSpace } from '../../../const';
import { getNearByOffers, getIsNearByLoading } from './selectors';
import { generateOfferCards } from '../../../util/mock';

describe('near-by-selectors', () => {
  const state = {
    [NameSpace.NearBy]: {
      nearByOffers: generateOfferCards(),
      isNearByLoading: false,
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
});
