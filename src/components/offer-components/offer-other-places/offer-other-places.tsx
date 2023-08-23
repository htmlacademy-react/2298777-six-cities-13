import { FC } from 'react';
import { useAppSelector } from '../../../hooks/use-store';
import OfferCard from '../offer-card/offer-card';
import cn from 'classnames';
import { getNearByOffers } from '../../../store/slices/near-by-data/selectors';

const OfferOtherPlaces : FC = () => {
  const otherPlaces = useAppSelector(getNearByOffers);
  return (
    <div className="container">
      <section className={cn('near-places places', {'visually-hidden': otherPlaces.length === 0})}>
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {otherPlaces.map((offer) => <OfferCard offer={offer} key={offer.id} isNearByCard/>)}
        </div>
      </section>
    </div>
  );
};

export default OfferOtherPlaces;
