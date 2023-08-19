import { FC } from 'react';
import { filterOfferByCity } from '../../../util/util';
import FavoritesCard from '../favorites-card';
import { CityString, Offers } from '../../../types/app-type';

type FavoritePlacesProps = {
  city: CityString;
  favoriteOffers: Offers;
}

const FavoritePlaces : FC<FavoritePlacesProps> = ({city, favoriteOffers}) => (
  <div className="favorites__places">
    {filterOfferByCity(favoriteOffers, city).map((offer) => (
      <FavoritesCard key={offer.id} offer={offer}/>
    ))}
  </div>
);

export default FavoritePlaces;
