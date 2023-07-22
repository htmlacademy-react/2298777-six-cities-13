import { FC } from 'react';
import { CityString, Offers } from '../../types';
import FavoriteListItem from './favorites-list-item';
import FavoriteCardList from './favorites-card-list';

type FavoritesCitiesListProps = {
  cities: CityString[];
  favoriteOffers: Offers;
}

const FavoritesCitiesList : FC<FavoritesCitiesListProps> = ({cities, favoriteOffers}) => (
  <ul className="favorites__list">
    {cities.map((city) => (
      <FavoriteListItem key={city} city={city}>
        <FavoriteCardList city={city} favoriteOffers={favoriteOffers}/>
      </FavoriteListItem>
    ))}
  </ul>
);

export default FavoritesCitiesList;
