import { FC } from 'react';
import OfferReviewInfo from './offer-review-info';
import OfferReviewUser from './offer-review-user';
import { useAppSelector } from '../../hooks/use-store';
import { getComments } from '../../store/slices/comments-data/selectors';


const OfferReviews : FC = () => {
  const comments = useAppSelector(getComments);
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
