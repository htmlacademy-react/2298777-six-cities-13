import {FC} from 'react';
import {CityString, Offers} from '../../types';
import FavoritesCard from './favorites-card';
import {filterOfferByCity} from '../../util';

type FavoriteCardListProps = {
  city: CityString;
  favoriteOffers: Offers;
}

const FavoriteCardList : FC<FavoriteCardListProps> = ({favoriteOffers, city}) => (
  filterOfferByCity(favoriteOffers, city).map((offer) => (
    <FavoritesCard key={offer.id} offer={offer}/>
  ))
);

export default FavoriteCardList;
