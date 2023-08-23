import { describe } from 'vitest';
import createAPI from '../../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { APIRoute } from '../../const';
import { generateComments, extractActionTypes, AppThunkDispatch } from '../../util/mock';
import { fetchCommentsAction, postCommentAction } from './comment';
import { State } from '../../types/store';
import { Action } from 'redux';

describe('async comments thunks tests', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let store : ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({});
  });

  describe('fetchCommentsAction', () => {
    it('should dispatch correct actions with code 200', async () => {
      const comments = generateComments();
      mockAxiosAdapter.onGet(APIRoute.Comments('1')).reply(200, comments);

      await store.dispatch(fetchCommentsAction('1'));

      const emittedActions = store.getActions();
      const actions = extractActionTypes(emittedActions);
      const fetchCommentsActionFulfilled = emittedActions[1] as ReturnType<typeof fetchCommentsAction.fulfilled>;

      expect(actions).toEqual([
        fetchCommentsAction.pending.type,
        fetchCommentsAction.fulfilled.type,
      ]);

      expect(fetchCommentsActionFulfilled.payload).toEqual(comments);
    });

    it('should dispatch correct actions with code 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Comments('1')).reply(400);

      await store.dispatch(fetchCommentsAction('1'));
      const actions = extractActionTypes(store.getActions());

      expect(actions).toEqual([
        fetchCommentsAction.pending.type,
        fetchCommentsAction.rejected.type,
      ]);
    });
  });

  describe('postCommentAction', () => {
    const comment = generateComments()[0];

    it('should dispatch correct actions with code 200', async () => {
      mockAxiosAdapter.onPost(APIRoute.Comments('1')).reply(200, comment);

      await store.dispatch(postCommentAction({comment: comment.comment, rating: comment.rating, offerId: '1'}));

      const emittedActions = store.getActions();
      const actions = extractActionTypes(emittedActions);
      const postCommentActionFulfilled = emittedActions[1] as ReturnType<typeof postCommentAction.fulfilled>;

      expect(actions).toEqual([
        postCommentAction.pending.type,
        postCommentAction.fulfilled.type,
      ]);

      expect(postCommentActionFulfilled.payload).toEqual(comment);
    });

    it('should dispatch correct actions with code 400', async () => {
      mockAxiosAdapter.onPost(APIRoute.Comments('1')).reply(400);

      await store.dispatch(postCommentAction({comment: comment.comment, rating: comment.rating, offerId: '1'}));
      const actions = extractActionTypes(store.getActions());

      expect(actions).toEqual([
        postCommentAction.pending.type,
        postCommentAction.rejected.type,
      ]);
    });
  });
});
