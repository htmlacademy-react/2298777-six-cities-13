import MainPage from '../../pages/main-page/main';
import LoginPage from '../../pages/login-page/login-page';
import Page404 from '../../pages/page-404/page-404';
import FavoritePage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import PrivateRoute from '../private-route/private-route';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { AppRoutes, AuthorizationStatus } from '../../const';
import { HelmetProvider } from 'react-helmet-async';

type AppProps = {
  numberOfOfferCards: number;
}

function App({numberOfOfferCards} : AppProps) : JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.Main} element={<MainPage numberOfOfferCards={numberOfOfferCards}/>}/>
          <Route path={AppRoutes.Login} element={<LoginPage/>}/>
          <Route path={AppRoutes.Favorites} element=
            {
              <PrivateRoute authStatus={AuthorizationStatus.Auth}>
                <FavoritePage/>
              </PrivateRoute>
            }
          />
          <Route path={AppRoutes.Offer} element={<OfferPage/>}/>
          <Route path='*' element={<Page404/>}/>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
