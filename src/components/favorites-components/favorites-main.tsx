import { FC } from 'react';
import FavoritesCitiesList from './favorites-cities-list';


const FavoritesMain : FC = () => (
  <main className="page__main page__main--favorites">
    <div className="page__favorites-container container">
      <FavoritesCitiesList/>
    </div>
  </main>
);

export default FavoritesMain;
