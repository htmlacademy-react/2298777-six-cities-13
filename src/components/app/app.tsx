import MainPage from '../../pages/main-page/main';
import LoginPage from '../../pages/login-page/login-page';
import Page404 from '../../pages/page-404/page-404';
import FavoritePage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import PrivateRoute from '../other/private-route';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { AppRoutes, AuthorizationStatus } from '../../const';
import { FC } from 'react';
import Layout from '../layout/layout';


const App : FC = () => {
  const router = createBrowserRouter([
    {path: '', element: <Layout/>, children: [
      {path: AppRoutes.Main, element: <MainPage/>},
      {path: AppRoutes.Login, element: <LoginPage/>},
      {path: AppRoutes.Favorites, element:
      <PrivateRoute authStatus={AuthorizationStatus.Auth}>
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
  ]);
  return <RouterProvider router={router}/>;
};

export default App;
