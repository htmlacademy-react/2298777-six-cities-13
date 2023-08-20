import { FC } from 'react';
import FavoriteList from '../favorite-list/favorite-list';

const FavoritesCitiesList : FC = () => (
  <section className="favorites" data-testid='favorites-cities-list'>
    <h1 className="favorites__title">Saved listing</h1>
    <FavoriteList/>
  </section>
);

export default FavoritesCitiesList;
