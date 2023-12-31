import { FC } from 'react';
import { DetailedOffer, Offer } from '../../../types/app-type';
import { getStarWidth } from '../../../util/util';

type OfferRatingProps = {
  offer: Offer | DetailedOffer;
};

const OfferRating : FC<OfferRatingProps> = ({offer}) => (
  <div className="place-card__rating rating" data-testid='offer-rating'>
    <div className="place-card__stars rating__stars">
      <span style={{width: getStarWidth(offer.rating)}}></span>
      <span className="visually-hidden">Rating</span>
    </div>
  </div>
);

export default OfferRating;
