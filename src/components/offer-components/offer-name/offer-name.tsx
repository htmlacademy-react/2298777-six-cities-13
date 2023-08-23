import { FC } from 'react';
import { DetailedOffer, Offer } from '../../../types/app-type';
import OfferLink from '../../other/offer-link';

type OfferNameProps = {
  offer: Offer | DetailedOffer;
};

const OfferName : FC<OfferNameProps> = ({offer}) => (
  <h2 className="place-card__name" data-testid='offer-name'>
    <OfferLink offerId={offer.id}>{offer.title}</OfferLink>
  </h2>
);

export default OfferName;
