import { Stars } from '../../const';

type OfferStarItemProps = {
  star: number;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

function OfferStarItem({star, onChange} : OfferStarItemProps) : JSX.Element {
  return (
    <>
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
    </>
  );
}

export default OfferStarItem;
