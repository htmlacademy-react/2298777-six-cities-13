import Map from '../../other/map';
import { FC } from 'react';
import MainPlaces from '../main-places/main-places';


const MainOffers : FC = () => (
  <div className="cities" data-testid='main-offers'>
    <div className="cities__places-container container">
      <MainPlaces/>
      <div className="cities__right-section">
        <Map
          className='cities__map'
          isHoverActive
        />
      </div>
    </div>
  </div>
);

export default MainOffers;
