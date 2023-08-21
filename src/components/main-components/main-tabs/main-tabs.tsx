import { FC } from 'react';
import MainLocations from '../main-locations/main-locations';

const MainTabs : FC = () => (
  <div className="tabs" data-testid='main-tabs'>
    <section className="locations container">
      <MainLocations/>
    </section>
  </div>
);

export default MainTabs;
