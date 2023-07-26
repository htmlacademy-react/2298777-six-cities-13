import { FC } from 'react';
import comments from '../../mocks/comments';
import OfferForm from './offer-form';
import OfferReviews from './offer-reviews';


const OfferAboutReviews : FC = () => (
  <section className="offer__reviews reviews">
    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
    <OfferReviews comments={comments}/>
    <OfferForm/>
  </section>
);

export default OfferAboutReviews;
