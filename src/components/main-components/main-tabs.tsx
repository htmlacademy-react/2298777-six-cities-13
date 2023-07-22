import { FC } from 'react';
import MainLocations from './main-locations';
import { CityString } from '../../types';

type MainTabsProps = {
  city: CityString;
}

const MainTabs : FC<MainTabsProps> = ({city}) => (
  <div className="tabs">
    <section className="locations container">
      <MainLocations currentCity={city}/>
    </section>
  </div>
);

export default MainTabs;
