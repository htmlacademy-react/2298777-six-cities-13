import MainOffers from '../main-offers/main-offers';
import { FC } from 'react';
import MainTabs from '../main-tabs/main-tabs';
import { useAppSelector } from '../../../hooks/use-store';
import { getCurrentCityOffersLength } from '../../../store/slices/offers-data/selectors';


const MainMain : FC = () => {
  const currentCityOffersLength = useAppSelector(getCurrentCityOffersLength);
  if (!currentCityOffersLength) {
    return null;
  }
  return (
    <main className="page__main page__main--index" data-testid='main-main'>
      <h1 className="visually-hidden">Cities</h1>
      <MainTabs/>
      <MainOffers/>
    </main>
  );
};


export default MainMain;
