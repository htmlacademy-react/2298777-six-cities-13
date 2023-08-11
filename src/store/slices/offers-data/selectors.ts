import { NameSpace } from '../../../const';
import { State } from '../../../types/store';

export const getCurrentCity = (state: Pick<State, NameSpace.Offers>) => state[NameSpace.Offers].currentCity;

export const getCurrentSort = (state: Pick<State, NameSpace.Offers>) => state[NameSpace.Offers].currentSort;

export const getSelectedPoint = (state: Pick<State, NameSpace.Offers>) => state[NameSpace.Offers].selectedPoint;

export const getCurrentCityOffers = (state: Pick<State, NameSpace.Offers>) => state[NameSpace.Offers].currentCityOffers;

export const getOffers = (state: Pick<State, NameSpace.Offers>) => state[NameSpace.Offers].offers;

export const getPoints = (state: Pick<State, NameSpace.Offers>) => state[NameSpace.Offers].points;

export const getCityDetailed = (state: Pick<State, NameSpace.Offers>) => state[NameSpace.Offers].cityDetailed;

export const getCurrentCityOffersLength = (state: Pick<State, NameSpace.Offers>) => state[NameSpace.Offers].currentCityOffersLength;

export const getIsOffersLoading = (state: Pick<State, NameSpace.Offers>) => state[NameSpace.Offers].isOffersLoading;

export const getOffersError = (state: Pick<State, NameSpace.Offers>) => state[NameSpace.Offers].error;
