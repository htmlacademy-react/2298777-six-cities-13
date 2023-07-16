import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { PropsWithChildren } from 'react';

type PrivateRouteProps = {
  authStatus: string;
};

function PrivateRoute({authStatus, children} : PropsWithChildren<PrivateRouteProps>) : JSX.Element {
  return (
    authStatus === AuthorizationStatus.Auth ? children as JSX.Element : <Navigate to="/login"/>
  );
}

export default PrivateRoute;
