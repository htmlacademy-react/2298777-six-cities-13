import { Comments } from '../../types';
import { FC } from 'react';
import OfferReviewInfo from './offer-review-info';
import OfferReviewUser from './offer-review-user';

type OfferReviewsProps = {
  comments: Comments;
}

const OfferReviews : FC<OfferReviewsProps> = ({comments}) => (
  <ul className="reviews__list">
    {comments.map((comment) => (
      <li className="reviews__item" key={comment.id}>
        <OfferReviewUser comment={comment}/>
        <OfferReviewInfo comment={comment}/>
      </li>
    ))}
  </ul>
);

export default OfferReviews;
