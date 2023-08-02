import { FC } from 'react';
import OfferForm from './offer-form';
import OfferReviews from './offer-reviews';
import OfferReviewsLength from './offer-reviews-length';


const OfferAboutReviews : FC = () => (
  <section className="offer__reviews reviews">
    <OfferReviewsLength/>
    <OfferReviews/>
    <OfferForm/>
  </section>
);


export default OfferAboutReviews;
