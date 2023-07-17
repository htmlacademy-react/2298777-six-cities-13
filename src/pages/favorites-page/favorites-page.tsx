import { Helmet } from 'react-helmet-async';
import Logo from '../../components/other/logo';
import { Offers } from '../../types';
import HeaderContainer from '../../components/header/header-container';
import FavoritesMain from '../../components/favorites-components/favorites-main';

type FavoritePageProps = {
  favoriteOffers: Offers;
}

function FavoritePage({favoriteOffers} : FavoritePageProps) : JSX.Element {
  const cities = Array.from(new Set(favoriteOffers.map((offer) => offer.city.name)));
  return (
    <div className="page">
      <Helmet>
        <title>6 cities - Favorites</title>
      </Helmet>
      <HeaderContainer isNavShown/>

      <FavoritesMain cities={cities} favoriteOffers={favoriteOffers}/>
      <footer className="footer container">
        <Logo width={64} height={33}/>
      </footer>
    </div>
  );
}

export default FavoritePage;
