import { CityString, Offers } from '../../types/app-type';
import MainOffers from './main-offers';
import { FC } from 'react';
import MainTabs from './main-tabs';

type MainMainProps = {
  offersInCurrentCity: Offers;
  city: CityString;
}


const MainMain : FC<MainMainProps> = ({offersInCurrentCity, city}) => (
  <main className="page__main page__main--index">
    <h1 className="visually-hidden">Cities</h1>
    <MainTabs city={city}/>
    <MainOffers city={city} offersInCurrentCity={offersInCurrentCity}/>
  </main>
);

export default MainMain;
