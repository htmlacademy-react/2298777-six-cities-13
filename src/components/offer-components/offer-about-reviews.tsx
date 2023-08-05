import { FC } from 'react';
import OfferForm from './offer-form';
import OfferReviews from './offer-reviews';
import OfferReviewsLength from './offer-reviews-length';
import { useAppSelector } from '../../hooks/use-store';


const OfferAboutReviews : FC = () => {
  const authStatus = useAppSelector((state) => state.userData.authStatus);
  return (
    <section className="offer__reviews reviews">
      <OfferReviewsLength/>
      <OfferReviews/>
      {authStatus === 'AUTH' ? <OfferForm/> : null}
    </section>
  );
};


export default OfferAboutReviews;
