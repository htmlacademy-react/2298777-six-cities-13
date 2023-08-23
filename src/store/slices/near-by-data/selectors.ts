import { NameSpace } from '../../../const';
import { State } from '../../../types/store';

export const getNearByOffers = (state: Pick<State, NameSpace.NearBy>) => state[NameSpace.NearBy].nearByOffers;

export const getIsNearByLoading = (state: Pick<State, NameSpace.NearBy>) => state[NameSpace.NearBy].isNearByLoading;
