import { describe } from 'vitest';
import { commentsData } from './comments-data';
import { generateComments } from '../../../util/mock';
import { fetchCommentsAction, postCommentAction } from '../../api-actions/comment';

describe('comments slice', () => {
  it('should return initial state with undefined', () => {
    const emptyAction = { type: '' };
    const initialState = {
      comments: [],
      isCommentsLoading: false,
      commentsLength: 0,
    };
    const result = commentsData.reducer(undefined, emptyAction);
    expect(result).toEqual(initialState);
  });

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const initialState = {
      comments: [],
      isCommentsLoading: true,
      commentsLength: 100,
    };
    const result = commentsData.reducer(initialState, emptyAction);
    expect(result).toEqual(initialState);
  });
});

describe('comments slice async', () => {
  it ('should change comments with fetchCommentsAction.fulfilled', () => {
    let comments = generateComments();
    comments = comments.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    comments = comments.slice(0, 10);
    const stateForCheck = {
      comments,
      isCommentsLoading: false,
      commentsLength: comments.length,
    };
    const result = commentsData.reducer(undefined, fetchCommentsAction.fulfilled(comments, '', ''));
    expect(result).toEqual(stateForCheck);
  });

  it ('should change comments with fetchCommentsAction.rejected', () => {
    const stateForCheck = {
      comments: [],
      isCommentsLoading: false,
      commentsLength: 0,
    };
    const result = commentsData.reducer(undefined, fetchCommentsAction.rejected);
    expect(result).toEqual(stateForCheck);
  });

  it ('should change loading with fetchCommentsAction.pending', () => {
    const stateForCheck = {
      comments: [],
      isCommentsLoading: true,
      commentsLength: 0,
    };
    const result = commentsData.reducer(undefined, fetchCommentsAction.pending);
    expect(result).toEqual(stateForCheck);
  });

  it('should add comment with postCommentAction.fulfilled', () => {
    let comments = generateComments();
    const length = comments.length;
    comments = comments.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    comments = comments.slice(0, 10);
    const initialState = {
      comments,
      isCommentsLoading: false,
      commentsLength: length,
    };
    const comment = comments[0];
    const commentsForCheck = [comment, ...comments.slice(0, 9)];
    const stateForCheck = {
      comments: commentsForCheck,
      isCommentsLoading: false,
      commentsLength: length + 1,
    };
    const result = commentsData.reducer(initialState, postCommentAction.fulfilled(comment, '', {rating: 5, comment: 'comment', offerId: '1'}));
    expect(result).toEqual(stateForCheck);
  });

});
