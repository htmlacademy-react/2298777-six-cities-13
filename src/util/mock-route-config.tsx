import PrivateRoute from '../components/other/private-route/private-route';
import { AppRoutes } from '../const';

const mockRouteConfig = [
  {path: '', children: [
    {path: AppRoutes.Main, element: <span>{'main-page'}</span>},
    {path: AppRoutes.Login, element:
    <PrivateRoute isAuthNeeded={false}>
      <span>{'login-page'}</span>
    </PrivateRoute>
    },
    {path: AppRoutes.Favorites, element:
    <PrivateRoute isAuthNeeded>
      <span>{'favorites-page'}</span>
    </PrivateRoute>
    },
    {path: AppRoutes.Offer,
      children: [
        {index: true, element: <span>{'page-page'}</span>},
        {path: ':id', element: <span>{'offer-page'}</span>}
      ]
    },
    {path: '*', element: <span>{'page-404'}</span>}
  ]}
];

export default mockRouteConfig;
