import { CityString, Offers } from '../../types';
import OfferList from '../offer-components/offer-list';
import Map from '../other/map';
import { useState } from 'react';
import { Location } from '../../types';
import { FC } from 'react';
import MainSortOptions from './main-sort-options';
import { SortOptions } from '../../const';

type MainOffersProps = {
  offersInCurrentCity: Offers;
  city: CityString;
}

const MainOffers : FC<MainOffersProps> = ({offersInCurrentCity, city}) => {
  const [selectedPoint, setSelectedPoint] = useState<Location | undefined>(undefined);
  const [selectedSort, setSelectedSort] = useState<keyof typeof SortOptions>(SortOptions.Popular);

  const onOfferHover = (id : string) => {
    setSelectedPoint(offersInCurrentCity.find((offer) => offer.id === id)?.location);
  };
  const onSortChange = (sort: keyof typeof SortOptions) => {
    setSelectedSort(sort);
  };

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offersInCurrentCity.length} places to stay in {city}</b>
        <MainSortOptions selectedSort={selectedSort} onSortChange={onSortChange}/>
        <OfferList offers={offersInCurrentCity} onOfferHover={onOfferHover}/>
      </section>
      <div className="cities__right-section">
        <Map
          city={offersInCurrentCity[0].city}
          points={offersInCurrentCity.map((offer) => offer.location)}
          className='cities__map'
          isHoverActive
          selectedPoint={selectedPoint}
        />
      </div>
    </div>
  );
};

export default MainOffers;
