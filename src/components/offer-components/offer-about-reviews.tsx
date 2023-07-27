import { FC } from 'react';
import OfferForm from './offer-form';
import OfferReviews from './offer-reviews';
import { useAppSelector } from '../../hooks/use-store';


const OfferAboutReviews : FC = () => {
  const comments = useAppSelector((state) => state.comments);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <OfferReviews comments={comments}/>
      <OfferForm/>
    </section>
  );
};

export default OfferAboutReviews;
