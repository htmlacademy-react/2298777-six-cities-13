import { State } from '../../../types/store';
import { NameSpace } from '../../../const';

export const getCurrentOffer = (state: Pick<State, NameSpace.Offer>) => state[NameSpace.Offer].currentOffer;

export const getIsCurrentOfferLoading = (state: Pick<State, NameSpace.Offer>) => state[NameSpace.Offer].isCurrentOfferLoading;

export const getCurrentOfferError = (state: Pick<State, NameSpace.Offer>) => state[NameSpace.Offer].error;
