import OfferCard from './offer-card';
import { Offers } from '../../types/app-type';
import { FC } from 'react';

type OfferListProps = {
  offers: Offers;
  onOfferHover?: (id : string) => void;
}

const OfferList : FC<OfferListProps> = ({offers, onOfferHover}) => (
  <div className="cities__places-list places__list tabs__content">
    {offers.map((offer) => (<OfferCard key={offer.id} offer={offer} onOfferHover={onOfferHover}/>))}
  </div>
);

export default OfferList;
