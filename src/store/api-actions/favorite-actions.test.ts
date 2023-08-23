import { configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import { State } from '../../types/store';
import { Action } from 'redux';
import createAPI from '../../services/api';
import { AppThunkDispatch, extractActionTypes, generateOfferCards, createDetailedOfferFromOffer } from '../../util/mock';
import thunk from 'redux-thunk';
import { APIRoute } from '../../const';
import { fetchFavoritesAction, postFavoriteAction } from './favorite';
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

  describe('fetchFavoritesAction', () => {
    const favorites = generateOfferCards();

    it('should dispatch correct actions with code 200', async () => {
      mockAxiosAdapter.onGet(APIRoute.Favorite).reply(200, favorites);

      await store.dispatch(fetchFavoritesAction());

      const emittedActions = store.getActions();
      const actions = extractActionTypes(emittedActions);
      const fetchFavoritesActionFulfilled = emittedActions[1] as ReturnType<typeof fetchFavoritesAction.fulfilled>;

      expect(actions).toEqual([
        fetchFavoritesAction.pending.type,
        fetchFavoritesAction.fulfilled.type,
      ]);

      expect(fetchFavoritesActionFulfilled.payload).toEqual(favorites);
    });

    it('should dispatch correct actions with code 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Favorite).reply(400);

      await store.dispatch(fetchFavoritesAction());
      const actions = extractActionTypes(store.getActions());

      expect(actions).toEqual([
        fetchFavoritesAction.pending.type,
        fetchFavoritesAction.rejected.type,
      ]);
    });
  });

  describe('postFavoriteAction', () => {
    it('should dispatch correct actions with code 200', async () => {
      const favorite = createDetailedOfferFromOffer(generateOfferCards()[0]);
      mockAxiosAdapter.onPost(APIRoute.postFavorite(favorite.id, 1)).reply(200, favorite);

      await store.dispatch(postFavoriteAction({offerId: favorite.id, status: true}));

      const emittedActions = store.getActions();
      const actions = extractActionTypes(emittedActions);
      const postFavoriteActionFulfilled = emittedActions[1] as ReturnType<typeof postFavoriteAction.fulfilled>;

      expect(actions).toEqual([
        postFavoriteAction.pending.type,
        postFavoriteAction.fulfilled.type,
      ]);

      expect(postFavoriteActionFulfilled.payload).toEqual(favorite);
    });

    it('should dispatch correct actions with code 400', async () => {
      mockAxiosAdapter.onPost(APIRoute.postFavorite('1', 1)).reply(400);

      await store.dispatch(postFavoriteAction({offerId: '1', status: true}));
      const actions = extractActionTypes(store.getActions());

      expect(actions).toEqual([
        postFavoriteAction.pending.type,
        postFavoriteAction.rejected.type,
      ]);
    });
  });
});
