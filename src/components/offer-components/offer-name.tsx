import { FC } from 'react';
import { Offer } from '../../types';
import OfferLink from '../other/offer-link';

type OfferNameProps = {
  offer: Offer;
};

const OfferName : FC<OfferNameProps> = ({offer}) => (
  <h2 className="place-card__name">
    <OfferLink offerId={offer.id}>{offer.title}</OfferLink>
  </h2>
);

export default OfferName;
