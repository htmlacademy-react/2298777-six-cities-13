import { FC } from 'react';
import { useAppSelector } from '../../../hooks/use-store';
import { getCommentsLength } from '../../../store/slices/comments-data/selectors';

const OfferReviewsLength : FC = () => {
  const commentsLength = useAppSelector(getCommentsLength);
  return (
    <h2 className="reviews__title">Reviews &middot;
      <span className="reviews__amount">{commentsLength}</span>
    </h2>
  );
};

export default OfferReviewsLength;
