import { ChangeEvent, FC } from 'react';
import OfferStarItem from '../offer-star-item/offer-star-item';

type OfferStarListProps = {
  onChange: (evt : ChangeEvent<HTMLInputElement>) => void;
  rating: number;
  disabled: boolean;
}

const OfferStarList : FC<OfferStarListProps> = ({onChange, rating, disabled}) => (
  <div className="reviews__rating-form form__rating" data-testid='offer-star-list'>
    {[5, 4, 3, 2, 1].map((star) =>
      (
        <OfferStarItem
          key={star}
          star={star}
          rating={rating}
          onChange={onChange}
          disabled={disabled}
        />
      )
    )}
  </div>
);

export default OfferStarList;
