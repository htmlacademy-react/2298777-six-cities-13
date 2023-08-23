import { NameSpace } from '../../../const';
import { getCurrentOffer, getIsCurrentOfferLoading, getCurrentOfferError } from './selectors';
import { generateDetailOffer } from '../../../util/mock';

describe('Offer selectors', () => {
  const state = {
    [NameSpace.Offer]: {
      currentOffer: generateDetailOffer(),
      isCurrentOfferLoading: false,
      error: null,
    },
  };

  it('getCurrentOffer should return current offer', () => {
    const currentOffer = state[NameSpace.Offer].currentOffer;
    const result = getCurrentOffer(state);
    expect(result).toEqual(currentOffer);
  });

  it('getIsCurrentOfferLoading should return loading status', () => {
    const isCurrentOfferLoading = state[NameSpace.Offer].isCurrentOfferLoading;
    const result = getIsCurrentOfferLoading(state);
    expect(result).toEqual(isCurrentOfferLoading);
  });

  it('getCurrentOfferError should return error', () => {
    const error = state[NameSpace.Offer].error;
    const result = getCurrentOfferError(state);
    expect(result).toEqual(error);
  });
});
