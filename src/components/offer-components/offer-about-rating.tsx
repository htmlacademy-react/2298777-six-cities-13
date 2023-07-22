import { FC } from 'react';
import { getStarWidth } from '../../util';

type OfferAboutRatingProps = {
  rating : number;
};

const OfferAboutRating : FC<OfferAboutRatingProps> = ({rating}) => (
  <div className="offer__rating rating">
    <div className="offer__stars rating__stars">
      <span style={{width: getStarWidth(rating)}}></span>
      <span className="visually-hidden">Rating</span>
    </div>
    <span className="offer__rating-value rating__value">{rating}</span>
  </div>
);

export default OfferAboutRating;
