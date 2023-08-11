import { describe } from 'vitest';
import { commentsData } from './comments-data';

describe('comments selectors', () => {
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
