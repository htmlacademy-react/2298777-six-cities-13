import { FC } from 'react';
import FavoriteListItem from './favorites-list-item';
import FavoriteCardList from './favorites-card-list';
import { useAppSelector } from '../../hooks/use-store';

const FavoritesCitiesList : FC = () => {
  const favoriteOffers = useAppSelector((state) => state.offers).filter((offer) => offer.isFavorite);
  const cities = Array.from(new Set(favoriteOffers.map((offer) => offer.city.name)));
  return (
    <ul className="favorites__list">
      {cities.map((city) => (
        <FavoriteListItem key={city} city={city}>
          <FavoriteCardList city={city} favoriteOffers={favoriteOffers}/>
        </FavoriteListItem>
      ))}
    </ul>
  );
};

export default FavoritesCitiesList;
