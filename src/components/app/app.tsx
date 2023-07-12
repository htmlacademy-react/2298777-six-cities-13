import MainPage from '../../pages/main-page/main';
import LoginPage from '../../pages/login-page/login-page';
import Page404 from '../../pages/page-404/page-404';
import FavoritePage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import PrivateRoute from '../private-route/private-route';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { AppRoutes, AuthorizationStatus } from '../../const';
import { Comments, DetailedOffers, Offers, Users } from '../../types';
import offers from '../../mocks/offers';

type AppProps = {
  offers: Offers;
  detailedOffers: DetailedOffers;
  comments: Comments;
  users: Users;
}

function App(props : AppProps) : JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Main} element=
          {
            <MainPage
              offers={props.offers}
            />
          }
        />
        <Route path={AppRoutes.Login} element={<LoginPage/>}/>
        <Route path={AppRoutes.Favorites} element=
          {
            <PrivateRoute authStatus={AuthorizationStatus.Auth}>
              <FavoritePage favoriteOffers={offers.filter((offer) => offer.isFavorite)}/>
            </PrivateRoute>
          }
        />
        <Route path={AppRoutes.Offer}>
          <Route index element={<Page404/>}/>
          <Route path=':id' element=
            {
              <OfferPage
                detailedOffers={props.detailedOffers}
                comments={props.comments}
              />
            }
          />
        </Route>
        <Route path='*' element={<Page404/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
