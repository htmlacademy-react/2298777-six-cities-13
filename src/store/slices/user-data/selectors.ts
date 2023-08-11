import { NameSpace } from '../../../const';
import { State } from '../../../types/store';

export const getAuthStatus = (state: Pick<State, NameSpace.User>) => state[NameSpace.User].authStatus;

export const getUserData = (state: Pick<State, NameSpace.User>) => state[NameSpace.User].user;
