import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../../const';
import { PropsWithChildren } from 'react';
import { AppRoutes } from '../../../const';
import { FC } from 'react';
import { useAppSelector } from '../../../hooks/use-store';
import { getAuthStatus } from '../../../store/slices/user-data/selectors';

const PrivateRoute : FC<PropsWithChildren<{isAuthNeeded: boolean}>> = ({children, isAuthNeeded}) => {
  const authStatus = useAppSelector(getAuthStatus);

  if (isAuthNeeded) {
    return (
      authStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoutes.Login}/>
    );
  }

  return (
    authStatus === AuthorizationStatus.NoAuth ? children : <Navigate to={AppRoutes.Main}/>
  );
};


export default PrivateRoute;
