import { AppRoutes } from '../../const';
import FavoritePage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main';
import OfferPage from '../../pages/offer-page/offer-page';
import Page404 from '../../pages/page-404/page-404';
import Layout from '../layout/layout';
import PrivateRoute from '../other/private-route/private-route';

const routeConfig = [
  {path: '', element: <Layout/>, children: [
    {path: AppRoutes.Main, element: <MainPage/>},
    {path: AppRoutes.Login, element:
    <PrivateRoute isAuthNeeded={false}>
      <LoginPage/>
    </PrivateRoute>
    },
    {path: AppRoutes.Favorites, element:
    <PrivateRoute isAuthNeeded>
      <FavoritePage/>
    </PrivateRoute>
    },
    {path: AppRoutes.Offer,
      children: [
        {index: true, element: <Page404/>},
        {path: ':id', element: <OfferPage/>}
      ]
    },
    {path: '*', element: <Page404/>}
  ]}
];

export default routeConfig;
