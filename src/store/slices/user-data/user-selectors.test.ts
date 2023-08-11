import { describe } from 'vitest';
import { AuthorizationStatus, NameSpace } from '../../../const';
import { generateUser } from '../../../util/mock';
import { getAuthStatus, getUserData } from './selectors';
import { ValueOf } from '../../../types/app-type';

describe('User data selectors', () => {
  const state = {
    [NameSpace.User]: {
      authStatus: 'AUTH' as ValueOf<typeof AuthorizationStatus>,
      user: generateUser(),
    },
  };

  it('should return auth status', () => {
    const authStatus = state[NameSpace.User].authStatus;
    const result = getAuthStatus(state);
    expect(result).toEqual(authStatus);
  });

  it('should return user data', () => {
    const user = state[NameSpace.User].user;
    const result = getUserData(state);
    expect(result).toEqual(user);
  });
});
