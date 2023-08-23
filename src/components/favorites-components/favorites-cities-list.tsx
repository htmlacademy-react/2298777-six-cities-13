import { FC } from 'react';
import FavoriteList from './favorite-list/favorite-list';

const FavoritesCitiesList : FC = () => (
  <section className="favorites">
    <h1 className="favorites__title">Saved listing</h1>
    <FavoriteList/>
  </section>
);

export default FavoritesCitiesList;
