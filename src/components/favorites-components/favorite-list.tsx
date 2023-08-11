import { FC } from 'react';
import FavoriteLocation from './favorites-list-item';
import FavoritePlaces from './favorite-places';
import { useAppSelector } from '../../hooks/use-store';
import { getFavorites } from '../../store/slices/favorite-data/selectors';

const FavoriteList : FC = () => {
  const favoriteOffers = useAppSelector(getFavorites);
  const cities = Array.from(new Set(favoriteOffers.map((offer) => offer.city.name)));
  return(
    <ul className="favorites__list">
      {cities.map((city) => (
        <li className="favorites__locations-items" key={city}>
          <FavoriteLocation city={city}/>
          <FavoritePlaces city={city} favoriteOffers={favoriteOffers}/>
        </li>
      ))}
    </ul>
  );
};

export default FavoriteList;
