import { FC } from 'react';
import { Comments } from '../../types';
import OfferForm from './offer-form';
import OfferReviews from './offer-reviews';


const OfferAboutReviews : FC<{comments : Comments}> = ({comments}) => (
  <section className="offer__reviews reviews">
    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
    <OfferReviews comments={comments}/>
    <OfferForm/>
  </section>
);

export default OfferAboutReviews;
