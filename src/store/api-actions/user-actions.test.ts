import { configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import { State } from '../../types/store';
import createAPI from '../../services/api';
import { AppThunkDispatch, extractActionTypes, generateUser } from '../../util/mock';
import { Action } from 'redux';
import thunk from 'redux-thunk';
import { describe } from 'vitest';
import { APIRoute } from '../../const';
import { checkAuthAction, loginAction, logoutAction } from './user';
import { fetchFavoritesAction } from './favorite';
import * as tokenStorage from '../../services/token';

describe('async user thunks tests', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let store : ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({});
  });

  describe('checkAuthAction', () => {
    it('should dispatch correct actions with code 200', async () => {
      const user = generateUser();
      mockAxiosAdapter.onGet(APIRoute.Login).reply(200, user);

      await store.dispatch(checkAuthAction());
      const actions = extractActionTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.fulfilled.type,
      ]);
    });

    it('should dispatch correct actions with code 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Login).reply(400);

      await store.dispatch(checkAuthAction());
      const actions = extractActionTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.rejected.type,
      ]);
    });
  });

  describe('loginAction', () => {
    it('should dispatch correct actions with code 200', async () => {
      const user = generateUser();
      mockAxiosAdapter.onPost(APIRoute.Login).reply(200, user);

      await store.dispatch(loginAction({email: user.email, password: '1w'}));

      const emittedActions = store.getActions();
      const actions = extractActionTypes(emittedActions);
      const loginActionFulfilled = emittedActions[2] as ReturnType<typeof loginAction.fulfilled>;

      expect(actions).toEqual([
        loginAction.pending.type,
        fetchFavoritesAction.pending.type,
        loginAction.fulfilled.type,
      ]);

      expect(loginActionFulfilled.payload).toEqual(user);
    });

    it('should dispatch correct actions with code 400', async () => {
      mockAxiosAdapter.onPost(APIRoute.Login).reply(400);

      await store.dispatch(loginAction({email: '1', password: '1w'}));
      const actions = extractActionTypes(store.getActions());

      expect(actions).toEqual([
        loginAction.pending.type,
        loginAction.rejected.type,
      ]);
    });

    it('should save token to Cookie', async () => {
      const user = generateUser();
      mockAxiosAdapter.onPost(APIRoute.Login).reply(200, user);
      const mockSaveToken = vi.spyOn(tokenStorage, 'setToken');

      await store.dispatch(loginAction({email: user.email, password: '1w'}));

      expect(mockSaveToken).toHaveBeenCalledWith(user.token);
      expect(mockSaveToken).toHaveBeenCalledTimes(1);
    });
  });

  describe('logoutAction', () => {
    it('should dispatch correct actions with code 204', async () => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(204);

      await store.dispatch(logoutAction());
      const actions = extractActionTypes(store.getActions());

      expect(actions).toEqual([
        logoutAction.pending.type,
        logoutAction.fulfilled.type,
      ]);
    });

    it('should dispatch correct actions with code 400', async () => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(400);

      await store.dispatch(logoutAction());
      const actions = extractActionTypes(store.getActions());

      expect(actions).toEqual([
        logoutAction.pending.type,
        logoutAction.rejected.type,
      ]);
    });

    it('should remove token from Cookie', async () => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(204);
      const mockRemoveToken = vi.spyOn(tokenStorage, 'removeToken');

      await store.dispatch(logoutAction());

      expect(mockRemoveToken).toHaveBeenCalledTimes(1);
    });
  });
});
