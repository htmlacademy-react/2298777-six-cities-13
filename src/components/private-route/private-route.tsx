import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';

type PrivateRouteProps = {
  authStatus: string;
  children: JSX.Element;
};

function PrivateRoute({authStatus, children} : PrivateRouteProps) : JSX.Element {
  return (
    authStatus === AuthorizationStatus.Auth ? children : <Navigate to="/login"></Navigate>
  );
}

export default PrivateRoute;
