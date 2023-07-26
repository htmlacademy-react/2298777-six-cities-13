import { FC } from 'react';
import MainLocations from './main-locations';

const MainTabs : FC = () => (
  <div className="tabs">
    <section className="locations container">
      <MainLocations/>
    </section>
  </div>
);

export default MainTabs;
