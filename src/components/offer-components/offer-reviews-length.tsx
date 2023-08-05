import { FC } from 'react';
import { useAppSelector } from '../../hooks/use-store';

const OfferReviewsLength : FC = () => {
  const commentsLength = useAppSelector((state) => state.commentsData.commentsLength);
  return (
    <h2 className="reviews__title">Reviews &middot;
      <span className="reviews__amount">{commentsLength}</span>
    </h2>
  );
};

export default OfferReviewsLength;
