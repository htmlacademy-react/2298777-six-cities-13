import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { PropsWithChildren } from 'react';
import { AppRoutes } from '../../const';

type PrivateRouteProps = {
  authStatus: string;
};

function PrivateRoute({authStatus, children} : PropsWithChildren<PrivateRouteProps>) : JSX.Element {
  return (
    authStatus === AuthorizationStatus.Auth ? children as JSX.Element : <Navigate to={AppRoutes.Login}/>
  );
}

export default PrivateRoute;
