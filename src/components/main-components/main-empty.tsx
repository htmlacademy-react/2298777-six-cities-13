import { FC } from 'react';
import MainTabs from './main-tabs';
import MainOffersEmpty from './main-offers-empty';


const MainEmpty : FC = () => (
  <main className="page__main page__main--index page__main--index-empty">
    <h1 className="visually-hidden">Cities</h1>
    <MainTabs/>
    <MainOffersEmpty/>
  </main>
);


export default MainEmpty;
