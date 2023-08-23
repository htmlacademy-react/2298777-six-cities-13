import { useAppSelector } from '../../../hooks/use-store';
import { getCurrentCityOffers } from '../../../store/slices/offers-data/selectors';
import OfferCard from '../offer-card/offer-card';
import { FC } from 'react';


const OfferList : FC = () => {
  const cityOffers = useAppSelector(getCurrentCityOffers);

  return (
    <div className="cities__places-list places__list tabs__content" data-testid='offer-list'>
      {cityOffers.map((offer) => <OfferCard offer={offer} key={offer.id}/>)}
    </div>
  );
};

export default OfferList;
