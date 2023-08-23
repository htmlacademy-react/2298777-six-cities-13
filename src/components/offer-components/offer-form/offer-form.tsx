import OfferStarList from '../offer-star-list/offer-star-list';
import React, { useState } from 'react';
import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/use-store';
import { postCommentAction } from '../../../store/api-actions/comment';
import { getIsCommentsLoading } from '../../../store/slices/comments-data/selectors';
import { getCurrentOffer } from '../../../store/slices/offer-data/selectors';

const OfferForm : FC = () => {
  const dispatch = useAppDispatch();
  const offerId = useAppSelector(getCurrentOffer)!.id;
  const isLoading = useAppSelector(getIsCommentsLoading);
  const [review, setReview] = useState({
    rating: 0,
    comment: '',
  });

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={(evt) => {
        evt.preventDefault();
        dispatch(postCommentAction({offerId, comment: review.comment, rating: review.rating})).then((data) => {
          if (data.meta.requestStatus === 'fulfilled') {
            setReview({
              rating: 0,
              comment: '',
            });
          }
        });
      }}
      data-testid='offer-form'
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <OfferStarList rating={review.rating} onChange={(evt) => setReview({
        ...review,
        rating: Number(evt.target.value),
      })} disabled={isLoading}
      />
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
        value={review.comment}
        disabled={isLoading}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={review.comment.length < 49
            || review.comment.length > 300
            || review.rating === 0
            || isLoading}
        >Submit
        </button>
      </div>
    </form>
  );
};

export default OfferForm;
