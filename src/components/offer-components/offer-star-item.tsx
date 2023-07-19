import { Stars } from '../../const';
import { FC } from 'react';

type OfferStarItemProps = {
  star: number;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

const OfferStarItem : FC<OfferStarItemProps> = ({star, onChange} : OfferStarItemProps) => (
  <div>
    <input
      className="form__rating-input visually-hidden"
      name="rating"
      value={star}
      id={`${star}-stars`}
      type="radio"
      onChange={(evt) => onChange(evt)}
    />
    <label htmlFor={`${star}-stars`} className="reviews__rating-label form__rating-label" title={Stars[star - 1]}>
      <svg className="form__star-image" width="37" height="33">
        <use xlinkHref="#icon-star"></use>
      </svg>
    </label>
  </div>
);

export default OfferStarItem;
