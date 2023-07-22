import { FC } from 'react';
import { Comment } from '../../types';
import { getStarWidth, humanizeDate } from '../../util';
import { REVIEW_DATE_FORMAT } from '../../const';

const OfferReviewInfo : FC<{comment: Comment}> = ({comment}) => {
  const humanizedDate = humanizeDate(comment.date, REVIEW_DATE_FORMAT);
  return (
    <div className="reviews__info">
      <div className="reviews__rating rating">
        <div className="reviews__stars rating__stars">
          <span style={{width: getStarWidth(comment.rating)}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <p className="reviews__text">
        {comment.comment}
      </p>
      <time className="reviews__time" dateTime={humanizedDate}>{humanizedDate}</time>
    </div>
  );
};

export default OfferReviewInfo;
