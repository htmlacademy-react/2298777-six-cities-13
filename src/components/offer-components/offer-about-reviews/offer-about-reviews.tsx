import { FC } from 'react';
import OfferForm from '../offer-form';
import OfferReviews from '../offer-reviews';
import OfferReviewsLength from '../offer-reviews-length';
import { useAppSelector } from '../../../hooks/use-store';
import { getAuthStatus } from '../../../store/slices/user-data/selectors';


const OfferAboutReviews : FC = () => {
  const authStatus = useAppSelector(getAuthStatus);
  return (
    <section className="offer__reviews reviews" data-testid='offer-reviews'>
      <OfferReviewsLength/>
      <OfferReviews/>
      {authStatus === 'AUTH' ? <OfferForm/> : null}
    </section>
  );
};


export default OfferAboutReviews;
