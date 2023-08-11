import { offerData } from './offer-data';
import { generateDetailOffer } from '../../../util/mock';

describe('Offer data slice', () => {
  it ('should return initial state with undefined', () => {
    const emptyAction = { type: '' };
    const initialState = {
      currentOffer: null,
      isCurrentOfferLoading: false,
      error: null,
    };
    const result = offerData.reducer(undefined, emptyAction);
    expect(result).toEqual(initialState);
  });

  it ('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const initialState = {
      currentOffer: generateDetailOffer(),
      isCurrentOfferLoading: true,
      error: null,
    };
    const result = offerData.reducer(initialState, emptyAction);
    expect(result).toEqual(initialState);
  });

  it('should remove current offer', () => {
    const initialState = {
      currentOffer: generateDetailOffer(),
      isCurrentOfferLoading: true,
      error: null,
    };
    const result = offerData.reducer(initialState, offerData.actions.removeCurrentOffer());
    expect(result.currentOffer).toEqual(null);
  });
});
