import { CityString, Offers } from '../../types';
import Map from '../other/map';
import { useState } from 'react';
import { Location } from '../../types';
import { FC } from 'react';
import { SortOptions } from '../../const';
import MainPlaces from './main-places';

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
    <div className="cities">
      <div className="cities__places-container container">
        <MainPlaces
          offersInCurrentCity={offersInCurrentCity}
          city={city}
          selectedSort={selectedSort}
          onSortChange={onSortChange}
          onOfferHover={onOfferHover}
        />
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
    </div>
  );
};

export default MainOffers;
