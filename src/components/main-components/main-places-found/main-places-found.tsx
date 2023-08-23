import { FC } from 'react';
import { useAppSelector } from '../../../hooks/use-store';
import { getCurrentCity, getCurrentCityOffersLength } from '../../../store/slices/offers-data/selectors';

const MainPlacesFound : FC = () => {
  const currentCityOffersLength = useAppSelector(getCurrentCityOffersLength);
  const city = useAppSelector(getCurrentCity);
  return (
    <b className="places__found">{currentCityOffersLength} {currentCityOffersLength === 1 ? 'place' : 'places'} to stay in {city}</b>
  );
};

export default MainPlacesFound;
