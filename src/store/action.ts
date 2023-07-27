import { createAction } from '@reduxjs/toolkit';
import { CityString, Comments, DetailedOffer, Offers, User, ValueOf } from '../types/app-type';
import { SortOptions } from '../const';
import { AuthorizationStatus } from '../const';

const setCurrentCity = createAction<{city: CityString}>('setCurrentCity');
const setCurrentSort = createAction<{sort: ValueOf<typeof SortOptions>}>('setCurrentSort');
const loadOffers = createAction<Offers>('loadOffers');
const requireAuthorization = createAction<ValueOf<typeof AuthorizationStatus>>('requireAuthorization');
const setError = createAction<string | null>('setError');
const setOffersLoadingAction = createAction<boolean>('setOffersLoading');
const setUserAction = createAction<User>('setUser');
const setFavoriteAction = createAction<string>('setFavorite');
const setCurrentOfferAction = createAction<DetailedOffer>('setCurrentOffer');
const setNearByOffersAction = createAction<Offers>('setNearByOffers');
const setCommentsAction = createAction<Comments>('setComments');
const setCurrentOfferLoadingAction = createAction<boolean>('setCurrentOfferLoading');

export { setCurrentCity, setCurrentSort, loadOffers, requireAuthorization,
  setError, setOffersLoadingAction, setUserAction, setFavoriteAction, setCurrentOfferAction,
  setNearByOffersAction, setCommentsAction, setCurrentOfferLoadingAction };
