import { FC } from 'react';
import MainSort from '../main-sort/main-sort';
import OfferList from '../../offer-components/offer-list/offer-list';
import MainPlacesFound from '../main-places-found/main-places-found';

const MainPlaces : FC = () => (
  <section className="cities__places places" data-testid='main-places'>
    <h2 className="visually-hidden">Places</h2>
    <MainPlacesFound/>
    <MainSort/>
    <OfferList/>
  </section>
);

export default MainPlaces;
