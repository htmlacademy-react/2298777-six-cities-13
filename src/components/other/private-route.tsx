import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { PropsWithChildren } from 'react';
import { AppRoutes } from '../../const';
import { FC } from 'react';

type PrivateRouteProps = {
  authStatus: string;
};

const PrivateRoute : FC<PropsWithChildren<PrivateRouteProps>> = ({authStatus, children}) => (
  authStatus === AuthorizationStatus.Auth ? children as JSX.Element : <Navigate to={AppRoutes.Login}/>
);


export default PrivateRoute;
