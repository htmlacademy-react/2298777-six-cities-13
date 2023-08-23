import { describe } from 'vitest';
import { userData } from './user-data';
import { ValueOf } from '../../../types/app-type';
import { AuthorizationStatus } from '../../../const';
import { generateUser } from '../../../util/mock';
import { checkAuthAction, loginAction, logoutAction } from '../../api-actions/user';

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

describe('user data slice async', () => {
  it('should change authStatus and user with loginAction.fulfilled', () => {
    const user = generateUser();
    const stateForCheck = {
      authStatus: 'AUTH' as ValueOf<typeof AuthorizationStatus>,
      user: user,
    };
    const result = userData.reducer(undefined, loginAction.fulfilled(user, '1', { email: user.email, password: 'daf' }));
    expect(result).toEqual(stateForCheck);
  });

  it('should change authStatus and user with loginAction.rejected', () => {
    const stateForCheck = {
      authStatus: 'NO_AUTH' as ValueOf<typeof AuthorizationStatus>,
      user: null,
    };
    const result = userData.reducer(undefined, loginAction.rejected(new Error('Error 401'), '1', { email: 'email', password: 'daf' }));
    expect(result).toEqual(stateForCheck);
  });

  it('should change authStatus and user with logout.fulfilled', () => {
    const stateForCheck = {
      authStatus: 'NO_AUTH' as ValueOf<typeof AuthorizationStatus>,
      user: null,
    };
    const result = userData.reducer(undefined, logoutAction.fulfilled);
    expect(result).toEqual(stateForCheck);
  });

  it('should change authStatus and user with checkAuthAction.fulfilled', () => {
    const user = generateUser();
    const stateForCheck = {
      authStatus: 'AUTH' as ValueOf<typeof AuthorizationStatus>,
      user: user,
    };
    const result = userData.reducer(undefined, checkAuthAction.fulfilled(user, '1', undefined));
    expect(result).toEqual(stateForCheck);
  });

  it('should change authStatus and user with checkAuthAction.rejected', () => {
    const stateForCheck = {
      authStatus: 'NO_AUTH' as ValueOf<typeof AuthorizationStatus>,
      user: null,
    };
    const result = userData.reducer(undefined, checkAuthAction.rejected(new Error('Error 401'), '1', undefined));
    expect(result).toEqual(stateForCheck);
  });
});
