import OfferStarItem from '../offer-star-item/offer-star-item';
import React from 'react';

function OfferForm() : JSX.Element {
  const [review, setReview] = React.useState({
    id: crypto.randomUUID(),
    date: new Date(),
    rating: 0,
    comment: '',
  });

  const offerStarItems = [5, 4, 3, 2, 1].map((star) =>
    (
      <OfferStarItem
        key={star}
        star={star}
        onChange={(evt) => {
          setReview({
            ...review,
            rating: Number(evt.target.value),
          });
        }}
      />
    )
  );

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={(evt) => {
        evt.preventDefault();
      }}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {offerStarItems}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={(evt) => {
          setReview({
            ...review,
            comment: evt.target.value,
          });
        }}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={review.comment.length < 49}
        >Submit
        </button>
      </div>
    </form>
  );
}

export default OfferForm;
