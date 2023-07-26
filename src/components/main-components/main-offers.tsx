import Map from '../other/map';
import { useState } from 'react';
import { Location } from '../../types/app-type';
import { FC } from 'react';
import MainPlaces from './main-places';
import { useAppSelector } from '../../hooks/use-store';


const MainOffers : FC = () => {
  const offersInCurrentCity = useAppSelector((state) => state.currentCityOffers);
  const [selectedPoint, setSelectedPoint] = useState<Location | undefined>(undefined);

  const onOfferHover = (id : string) => {
    setSelectedPoint(offersInCurrentCity.find((offer) => offer.id === id)?.location);
  };

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <MainPlaces
          offersInCurrentCity={offersInCurrentCity}
          onOfferHover={onOfferHover}
        />
        <div className="cities__right-section">
          <Map
            points={offersInCurrentCity.map((offer) => offer.location)}
            className='cities__map'
            isHoverActive
            selectedPoint={selectedPoint}
          />
        </div>
      </div>
    </div>
  );
};

export default MainOffers;
