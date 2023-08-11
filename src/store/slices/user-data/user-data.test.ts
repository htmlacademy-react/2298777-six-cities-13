import { describe } from 'vitest';
import { userData } from './user-data';
import { ValueOf } from '../../../types/app-type';
import { AuthorizationStatus } from '../../../const';
import { generateUser } from '../../../util/mock';

describe('user data slice', () => {
  it('should return initial state with undefined', () => {
    const emptyAction = { type: '' };
    const initialState = {
      authStatus: 'UNKNOWN',
      user: null,
    };
    const result = userData.reducer(undefined, emptyAction);
    expect(result).toEqual(initialState);
  });

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const stateForCheck = {
      authStatus: 'AUTH' as ValueOf<typeof AuthorizationStatus>,
      user: generateUser(),
    };
    const result = userData.reducer(stateForCheck, emptyAction);
    expect(result).toEqual(stateForCheck);
  });
});
