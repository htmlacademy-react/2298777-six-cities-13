import { Helmet } from 'react-helmet-async';
import FavoritesCard from '../../components/favorites-components/favorites-cards/favorites-card';
import FavoriteListItem from '../../components/favorites-components/favorites-list-item/favorites-list-item';
import Logo from '../../components/logo/logo';
import { Offers } from '../../types';
import ProfileNavLink from '../../components/header-nav-links/profile-nav-link/profile-nav-link';
import SignoutLink from '../../components/header-nav-links/signout-link/signout-link';

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
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo/>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <ProfileNavLink/>
                <SignoutLink/>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {cities.map((city) => (
                <FavoriteListItem key={city} city={city}>
                  {favoriteOffers.filter((offer) => offer.city.name === city).map((offer) => (
                    <FavoritesCard key={offer.id} offer={offer}></FavoritesCard>
                  ))}
                </FavoriteListItem>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Logo width={64} height={33}/>
      </footer>
    </div>
  );
}

export default FavoritePage;
