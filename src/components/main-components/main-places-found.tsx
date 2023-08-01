import { FC } from 'react';
import { useAppSelector } from '../../hooks/use-store';

const MainPlacesFound : FC = () => {
  const currentCityOffersLength = useAppSelector((state) => state.offersData.currentCityOffersLength);
  const city = useAppSelector((state) => state.offersData.currentCity);
  return (
    <b className="places__found">{currentCityOffersLength} places to stay in {city}</b>
  );
};

export default MainPlacesFound;
