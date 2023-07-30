import Map from '../other/map';
import { FC } from 'react';
import MainPlaces from './main-places';


const MainOffers : FC = () => (
  <div className="cities">
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
