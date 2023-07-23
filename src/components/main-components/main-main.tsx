import MainOffers from './main-offers';
import { FC } from 'react';
import MainTabs from './main-tabs';


const MainMain : FC = () => (
  <main className="page__main page__main--index">
    <h1 className="visually-hidden">Cities</h1>
    <MainTabs/>
    <MainOffers/>
  </main>
);

export default MainMain;
