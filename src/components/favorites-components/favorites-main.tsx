import { Offers } from '../../types';
import FavoritesCard from './favorites-card';
import FavoriteListItem from './favorites-list-item';
import { FC } from 'react';

type FavoritesMainProps = {
  cities: string[];
  favoriteOffers: Offers;
}

const FavoritesMain : FC<FavoritesMainProps> = ({cities, favoriteOffers}) => (
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
);

export default FavoritesMain;
