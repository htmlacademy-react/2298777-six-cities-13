import { describe } from 'vitest';
import { getComments, getCommentsLength, getIsCommentsLoading } from './selectors';
import { generateComment } from '../../../util/mock';
import { NameSpace } from '../../../const';

describe('comments selectors', () => {
  const state = {
    [NameSpace.Comments]: {
      comments: generateComment(),
      isCommentsLoading: false,
      commentsLength: 1,
    },
  };
  it('should return comments', () => {
    const comments = state[NameSpace.Comments].comments;
    const result = getComments(state);
    expect(result).toEqual(comments);
  });

  it('should return isCommentsLoading', () => {
    const isCommentsLoading = state[NameSpace.Comments].isCommentsLoading;
    const result = getIsCommentsLoading(state);
    expect(result).toEqual(isCommentsLoading);
  });

  it('should return commentsLength', () => {
    const commentsLength = state[NameSpace.Comments].commentsLength;
    const result = getCommentsLength(state);
    expect(result).toEqual(commentsLength);
  });
});

