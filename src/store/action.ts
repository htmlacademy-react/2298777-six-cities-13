import { createAction } from '@reduxjs/toolkit';
import { CityString, Comments, DetailedOffer, Offers, User, ValueOf, Comment, Location } from '../types/app-type';
import { SortOptions } from '../const';
import { AuthorizationStatus } from '../const';

const setCurrentCity = createAction<CityString>('setCurrentCity');
const setCurrentSort = createAction<ValueOf<typeof SortOptions>>('setCurrentSort');
const loadOffers = createAction<Offers>('loadOffers');
const requireAuthorization = createAction<ValueOf<typeof AuthorizationStatus>>('requireAuthorization');
const setError = createAction<string | null>('setError');
const setOffersLoadingAction = createAction<boolean>('setOffersLoading');
const setUserAction = createAction<User | null>('setUser');
const setCurrentOfferAction = createAction<DetailedOffer>('setCurrentOffer');
const setNearByOffersAction = createAction<Offers>('setNearByOffers');
const setCommentsAction = createAction<Comments>('setComments');
const setFavoritesAction = createAction<Offers>('setFavorites');
const setFavoriteAction = createAction<DetailedOffer>('setFavorite');
const setCurrentOfferLoadingAction = createAction<boolean>('setCurrentOfferLoading');
const setCommentAction = createAction<Comment>('setComment');
const setCommentLoadingAction = createAction<boolean>('setCommentLoading');
const setDefaultOffersAction = createAction('setDefaultOffers');
const setSelectedPointAction = createAction<Location | null>('setSelectedPoint');

export { setCurrentCity, setCurrentSort, loadOffers, requireAuthorization,
  setError, setOffersLoadingAction, setUserAction, setCurrentOfferAction,
  setNearByOffersAction, setCommentsAction, setFavoritesAction, setCurrentOfferLoadingAction,
  setFavoriteAction, setCommentAction, setCommentLoadingAction, setDefaultOffersAction,
  setSelectedPointAction };
