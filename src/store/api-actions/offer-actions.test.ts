import { configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import { State } from '../../types/store';
import { Action } from 'redux';
import thunk from 'redux-thunk';
import createAPI from '../../services/api';
import { AppThunkDispatch, extractActionTypes, generateOfferCards, createDetailedOfferFromOffer } from '../../util/mock';
import { APIRoute } from '../../const';
import { fetchCurrentOfferAction, fetchNearByPlacesAction, fetchOffersAction } from './offer';
import { describe } from 'vitest';

describe('async favorite thunks tests', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let store : ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({});
  });

  describe('fetchOffersAction', () => {
    it('should dispatch correct actions with code 200', async () => {
      const offers = generateOfferCards();
      mockAxiosAdapter.onGet(APIRoute.Offers).reply(200, offers);

      await store.dispatch(fetchOffersAction());

      const emittedActions = store.getActions();
      const actions = extractActionTypes(emittedActions);
      const fetchOffersActionFulfilled = emittedActions[1] as ReturnType<typeof fetchOffersAction.fulfilled>;

      expect(actions).toEqual([
        fetchOffersAction.pending.type,
        fetchOffersAction.fulfilled.type,
      ]);

      expect(fetchOffersActionFulfilled.payload).toEqual(offers);
    });

    it('should dispatch correct actions with code 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Offers).reply(400);

      await store.dispatch(fetchOffersAction());
      const actions = extractActionTypes(store.getActions());

      expect(actions).toEqual([
        fetchOffersAction.pending.type,
        fetchOffersAction.rejected.type,
      ]);
    });
  });

  describe('fetchCurrentOfferAction', () => {
    it('should dispatch correct actions with code 200', async () => {
      const offer = createDetailedOfferFromOffer(generateOfferCards()[0]);
      mockAxiosAdapter.onGet(APIRoute.DetailedOffer(offer.id)).reply(200, offer);

      await store.dispatch(fetchCurrentOfferAction(offer.id));

      const emittedActions = store.getActions();
      const actions = extractActionTypes(emittedActions);
      const fetchOffersActionFulfilled = emittedActions[1] as ReturnType<typeof fetchCurrentOfferAction.fulfilled>;

      expect(actions).toEqual([
        fetchCurrentOfferAction.pending.type,
        fetchCurrentOfferAction.fulfilled.type,
      ]);

      expect(fetchOffersActionFulfilled.payload).toEqual(offer);
    });

    it('should dispatch correct actions with code 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.DetailedOffer('1')).reply(400);

      await store.dispatch(fetchCurrentOfferAction('1'));
      const actions = extractActionTypes(store.getActions());

      expect(actions).toEqual([
        fetchCurrentOfferAction.pending.type,
        fetchCurrentOfferAction.rejected.type,
      ]);
    });
  });

  describe('fetchNearByPlacesAction', () => {
    it('should dispatch correct actions with code 200', async () => {
      const offers = generateOfferCards();
      mockAxiosAdapter.onGet(APIRoute.OffersNearby('1')).reply(200, offers);

      await store.dispatch(fetchNearByPlacesAction('1'));

      const emittedActions = store.getActions();
      const actions = extractActionTypes(emittedActions);
      const fetchNearByPlacesActionFulfilled = emittedActions[1] as ReturnType<typeof fetchNearByPlacesAction.fulfilled>;

      expect(actions).toEqual([
        fetchNearByPlacesAction.pending.type,
        fetchNearByPlacesAction.fulfilled.type,
      ]);

      expect(fetchNearByPlacesActionFulfilled.payload).toEqual(offers);
    });

    it('should dispatch correct actions with code 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.OffersNearby('1')).reply(400);

      await store.dispatch(fetchNearByPlacesAction('1'));
      const actions = extractActionTypes(store.getActions());

      expect(actions).toEqual([
        fetchNearByPlacesAction.pending.type,
        fetchNearByPlacesAction.rejected.type,
      ]);
    });
  });
});
