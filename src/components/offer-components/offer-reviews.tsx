import { FC } from 'react';
import OfferReviewInfo from './offer-review-info';
import OfferReviewUser from './offer-review-user';
import { useAppSelector } from '../../hooks/use-store';


const OfferReviews : FC = () => {
  const comments = useAppSelector((state) => state.commentsData.comments);
  return (
    <ul className="reviews__list">
      {comments.map((comment) => (
        <li className="reviews__item" key={comment.id}>
          <OfferReviewUser comment={comment}/>
          <OfferReviewInfo comment={comment}/>
        </li>
      ))}
    </ul>
  );
};

export default OfferReviews;
