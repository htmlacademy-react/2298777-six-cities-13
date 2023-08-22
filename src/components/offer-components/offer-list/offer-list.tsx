import { useAppSelector } from '../../../hooks/use-store';
import { getCurrentCityOffersLength } from '../../../store/slices/offers-data/selectors';
import OfferCard from '../offer-card/offer-card';
import { FC } from 'react';


const OfferList : FC = () => {
  const numberOfCityOffers = useAppSelector(getCurrentCityOffersLength);

  return (
    <div className="cities__places-list places__list tabs__content" data-testid='offer-list'>
      {new Array(numberOfCityOffers).fill(null).map((v, index) => <OfferCard index={index} key={index}/>)}
    </div>
  );
};

export default OfferList;
