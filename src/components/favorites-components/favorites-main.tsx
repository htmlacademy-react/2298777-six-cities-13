import { FC } from 'react';
import FavoritesCitiesList from './favorites-cities-list';


const FavoritesMain : FC = () => (
  <main className="page__main page__main--favorites">
    <div className="page__favorites-container container">
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <FavoritesCitiesList/>
      </section>
    </div>
  </main>
);

export default FavoritesMain;
