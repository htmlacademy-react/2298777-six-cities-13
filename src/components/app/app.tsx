import MainPage from '../../pages/main-page/main';
import LoginPage from '../../pages/login-page/login-page';
import Page404 from '../../pages/page-404/page-404';
import FavoritePage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import PrivateRoute from '../other/private-route';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { AppRoutes } from '../../const';
import { FC } from 'react';
import Layout from '../layout/layout';
import ErrorMessage from '../other/error-message/error-message';
import { Provider } from 'react-redux';
import store from '../../store';
import { checkAuthAction, fetchFavoritesAction, fetchOffersAction } from '../../store/api-action';

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction());
store.dispatch(fetchFavoritesAction());


const App : FC = () => {

  const router = createBrowserRouter([
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
  ]);
  return (
    <Provider store={store}>
      <ErrorMessage/>
      <RouterProvider router={router}/>
    </Provider>
  );
};

export default App;
