import { FC } from 'react';
import { useAppSelector } from '../../hooks/use-store';
import OfferCard from './offer-card';
import cn from 'classnames';

const OfferOtherPlaces : FC = () => {
  const otherPlaces = useAppSelector((state) => state.nearByData.nearByOffers);
  return (
    <div className="container">
      <section className={cn('near-places places', {'visually-hidden': otherPlaces.length === 0})}>
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {otherPlaces.map((offer) => (<OfferCard key={offer.id} offer={offer}/>))}
        </div>
      </section>
    </div>
  );
};

export default OfferOtherPlaces;
