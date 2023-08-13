import { offerData } from './offer-data';
import { generateDetailOffer } from '../../../util/mock';
import { fetchCurrentOfferAction } from '../../api-actions/offer';
import { postFavoriteAction } from '../../api-actions/favorite';
import { logoutAction } from '../../api-actions/user';

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

describe('Offer data slice async', () => {
  it('should change current offer with fetchCurrentOffer.fulfilled', () => {
    const offer = generateDetailOffer();
    const stateForCheck = {
      currentOffer: offer,
      isCurrentOfferLoading: false,
      error: null,
    };
    const result = offerData.reducer(undefined, fetchCurrentOfferAction.fulfilled(offer, '1', '1'));
    expect(result).toEqual(stateForCheck);
  });

  it('should change isCurrentOfferLoading with fetchCurrentOffer.pending', () => {
    const stateForCheck = {
      currentOffer: null,
      isCurrentOfferLoading: true,
      error: null,
    };
    const result = offerData.reducer(undefined, fetchCurrentOfferAction.pending);
    expect(result).toEqual(stateForCheck);
  });

  it('should change error with fetchCurrentOffer.rejected', () => {
    const stateForCheck = {
      currentOffer: null,
      isCurrentOfferLoading: false,
      error: 'Error while fetching current offer',
    };
    const result = offerData.reducer(undefined, fetchCurrentOfferAction.rejected(new Error('Error 401'), '1', '1'));
    expect(result).toEqual(stateForCheck);
  });

  it('should change favorite status with postFavoriteAction.fulfilled', () => {
    const offer = generateDetailOffer();
    const initialState = {
      currentOffer: offer,
      isCurrentOfferLoading: false,
      error: null,
    };
    const result = offerData.reducer(initialState, postFavoriteAction.fulfilled({...offer, isFavorite: !offer.isFavorite}, '1', { offerId: '1', status: true}));
    expect(result.currentOffer).toEqual({...offer, isFavorite: !offer.isFavorite});
  });

  it('should change favorite status with logoutAction.fulfilled', () => {
    const offer = generateDetailOffer();
    const initialState = {
      currentOffer: offer,
      isCurrentOfferLoading: false,
      error: null,
    };
    const result = offerData.reducer(initialState, logoutAction.fulfilled);
    expect(result.currentOffer).toEqual({...offer, isFavorite: false});
  });
});
