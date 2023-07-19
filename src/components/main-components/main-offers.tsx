import { Offers } from '../../types';
import OfferList from '../offer-components/offer-list';
import Map from '../other/map';
import { useState } from 'react';
import { Location } from '../../types';
import { FC } from 'react';

type MainOffersProps = {
  offersInCurrentCity: Offers;
  city: string;
}

const MainOffers : FC<MainOffersProps> = ({offersInCurrentCity, city}) => {
  const [selectedPoint, setSelectedPoint] = useState<Location | undefined>(undefined);
  const onOfferHover = (id : string) => {
    setSelectedPoint(offersInCurrentCity.find((offer) => offer.id === id)?.location);
  };
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offersInCurrentCity.length} places to stay in {city}</b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex={0}>
                  Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"></use>
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active" tabIndex={0}>Popular</li>
            <li className="places__option" tabIndex={0}>Price: low to high</li>
            <li className="places__option" tabIndex={0}>Price: high to low</li>
            <li className="places__option" tabIndex={0}>Top rated first</li>
          </ul>
        </form>
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
