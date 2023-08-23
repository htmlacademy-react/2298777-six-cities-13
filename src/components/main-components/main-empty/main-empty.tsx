import { FC } from 'react';
import MainTabs from '../main-tabs/main-tabs';
import MainOffersEmpty from '../main-offers-empty/main-offers-empty';
import { useAppSelector } from '../../../hooks/use-store';
import { getCurrentCityOffersLength } from '../../../store/slices/offers-data/selectors';


const MainEmpty : FC = () => {
  const currentCityOffersLength = useAppSelector(getCurrentCityOffersLength);
  if (currentCityOffersLength) {
    return null;
  }
  return (
    <main className="page__main page__main--index page__main--index-empty" data-testid='empty-main'>
      <h1 className="visually-hidden">Cities</h1>
      <MainTabs/>
      <MainOffersEmpty/>
    </main>
  );
};


export default MainEmpty;
