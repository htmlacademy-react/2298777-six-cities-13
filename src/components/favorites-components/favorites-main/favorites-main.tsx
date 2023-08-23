import { FC } from 'react';
import FavoritesCitiesList from '../favorites-cities-list/favorites-cities-list';


const FavoritesMain : FC = () => (
  <main className="page__main page__main--favorites" data-testid='favorites-main'>
    <div className="page__favorites-container container">
      <FavoritesCitiesList/>
    </div>
  </main>
);

export default FavoritesMain;
