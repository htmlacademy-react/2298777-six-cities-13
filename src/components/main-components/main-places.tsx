import { FC } from 'react';
import MainSort from './main-sort';
import OfferList from '../offer-components/offer-list';
import { Offers } from '../../types/app-type';

type MainPlacesProps = {
  offersInCurrentCity: Offers;
  onOfferHover: (id: string) => void;
}

const MainPlaces : FC<MainPlacesProps> = ({offersInCurrentCity, onOfferHover}) => {
  const city = offersInCurrentCity[0].city.name;
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offersInCurrentCity.length} places to stay in {city}</b>
      <MainSort/>
      <OfferList offers={offersInCurrentCity} onOfferHover={onOfferHover}/>
    </section>);
};

export default MainPlaces;
