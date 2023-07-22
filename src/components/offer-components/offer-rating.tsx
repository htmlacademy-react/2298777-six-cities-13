import { FC } from 'react';
import { Offer } from '../../types';
import { getStarWidth } from '../../util';

type OfferRatingProps = {
  offer: Offer;
};

const OfferRating : FC<OfferRatingProps> = ({offer}) => (
  <div className="place-card__rating rating">
    <div className="place-card__stars rating__stars">
      <span style={{width: getStarWidth(offer.rating)}}></span>
      <span className="visually-hidden">Rating</span>
    </div>
  </div>
);

export default OfferRating;
