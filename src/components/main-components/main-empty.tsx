import { FC } from 'react';
import { CityString } from '../../types';
import MainTabs from './main-tabs';
import MainOffersEmpty from './main-offers-empty';

type MainEmptyProps = {
  city: CityString;
}

const MainEmpty : FC<MainEmptyProps> = ({city}) => (
  <main className="page__main page__main--index page__main--index-empty">
    <h1 className="visually-hidden">Cities</h1>
    <MainTabs city={city}/>
    <MainOffersEmpty/>
  </main>
);

export default MainEmpty;
