import { ChangeEvent, FC } from 'react';
import OfferStarItem from '../offer-star-item/offer-star-item';

type OfferStarListProps = {
  onChange: (evt : ChangeEvent<HTMLInputElement>) => void;
  rating: number;
}

const OfferStarList : FC<OfferStarListProps> = ({onChange, rating}) => (
  <div className="reviews__rating-form form__rating" data-testid='offer-star-list'>
    {[5, 4, 3, 2, 1].map((star) =>
      (
        <OfferStarItem
          key={star}
          star={star}
          rating={rating}
          onChange={onChange}
        />
      )
    )}
  </div>
);

export default OfferStarList;
