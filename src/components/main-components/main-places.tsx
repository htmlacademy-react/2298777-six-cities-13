import { FC } from 'react';
import MainSort from './main-sort';
import OfferList from '../offer-components/offer-list';
import MainPlacesFound from './main-places-found';

const MainPlaces : FC = () => (
  <section className="cities__places places">
    <h2 className="visually-hidden">Places</h2>
    <MainPlacesFound/>
    <MainSort/>
    <OfferList/>
  </section>
);

export default MainPlaces;
