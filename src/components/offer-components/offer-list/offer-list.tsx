import OfferCard from '../offer-card/offer-card';
import { Offers } from '../../../types';
import React from 'react';

type OfferListProps = {
  offers: Offers;
}

function OfferList({offers} : OfferListProps) : JSX.Element {
  const [activeOffer, setActiveOffer] = React.useState(offers[0]);
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (<OfferCard key={offer.id} offer={offer}/>))}
    </div>
  );
}

export default OfferList;
