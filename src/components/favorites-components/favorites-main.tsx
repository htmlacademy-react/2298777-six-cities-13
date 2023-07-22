import { CityString, Offers } from '../../types';
import { FC } from 'react';
import FavoritesCitiesList from './favorites-cities-list';

type FavoritesMainProps = {
  cities: CityString[];
  favoriteOffers: Offers;
}

const FavoritesMain : FC<FavoritesMainProps> = ({cities, favoriteOffers}) => (
  <main className="page__main page__main--favorites">
    <div className="page__favorites-container container">
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <FavoritesCitiesList cities={cities} favoriteOffers={favoriteOffers}/>
      </section>
    </div>
  </main>
);

export default FavoritesMain;
