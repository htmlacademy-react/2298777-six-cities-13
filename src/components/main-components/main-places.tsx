import { FC } from 'react';
import MainSort from './main-sort';
import OfferList from '../offer-components/offer-list';
import { CityString, Offers } from '../../types';
import { SortOptions } from '../../const';

type MainPlacesProps = {
  offersInCurrentCity: Offers;
  city: CityString;
  selectedSort: keyof typeof SortOptions;
  onSortChange: (sort: keyof typeof SortOptions) => void;
  onOfferHover: (id: string) => void;
}

const MainPlaces : FC<MainPlacesProps> = ({offersInCurrentCity, city, selectedSort, onOfferHover, onSortChange}) => (
  <section className="cities__places places">
    <h2 className="visually-hidden">Places</h2>
    <b className="places__found">{offersInCurrentCity.length} places to stay in {city}</b>
    <MainSort selectedSort={selectedSort} onSortChange={onSortChange}/>
    <OfferList offers={offersInCurrentCity} onOfferHover={onOfferHover}/>
  </section>
);

export default MainPlaces;
