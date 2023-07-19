import MainPage from '../../pages/main-page/main';
import LoginPage from '../../pages/login-page/login-page';
import Page404 from '../../pages/page-404/page-404';
import FavoritePage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import PrivateRoute from '../other/private-route';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { AppRoutes, AuthorizationStatus } from '../../const';
import offers from '../../mocks/offers';
import comments from '../../mocks/comments';
import detailedOffers from '../../mocks/detailedOffers';
import { FC } from 'react';
import Layout from '../layout/layout';


const App : FC = () => {
  const router = createBrowserRouter([
    {path: '', element: <Layout/>, children: [
      {path: AppRoutes.Main, element: <MainPage offers={offers}/>},
      {path: AppRoutes.Login, element: <LoginPage/>},
      {path: AppRoutes.Favorites, element:
      <PrivateRoute authStatus={AuthorizationStatus.Auth}>
        <FavoritePage favoriteOffers={offers.filter((offer) => offer.isFavorite)}/>
      </PrivateRoute>
      },
      {path: AppRoutes.Offer, element:
        <OfferPage detailedOffers={detailedOffers} comments={comments}/>,
      children: [
        {path: ':id', element: <OfferPage detailedOffers={detailedOffers} comments={comments}/>}
      ]
      },
      {path: '*', element: <Page404/>}
    ]}
  ]);
  return <RouterProvider router={router}/>;
};

export default App;
