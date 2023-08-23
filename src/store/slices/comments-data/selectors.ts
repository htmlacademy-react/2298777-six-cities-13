import { State } from '../../../types/store';
import { NameSpace } from '../../../const';

export const getComments = (state: Pick<State, NameSpace.Comments>) => state[NameSpace.Comments].comments;

export const getIsCommentsLoading = (state: Pick<State, NameSpace.Comments>) => state[NameSpace.Comments].isCommentsLoading;

export const getCommentsLength = (state: Pick<State, NameSpace.Comments>) => state[NameSpace.Comments].commentsLength;
