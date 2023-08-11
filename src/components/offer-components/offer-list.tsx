import { useAppSelector } from '../../hooks/use-store';
import { getOffers } from '../../store/slices/offers-data/selectors';
import OfferCard from './offer-card';
import { FC } from 'react';


const OfferList : FC = () => {
  const offers = useAppSelector(getOffers);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (<OfferCard key={offer.id} offer={offer}/>))}
    </div>
  );
};

export default OfferList;
