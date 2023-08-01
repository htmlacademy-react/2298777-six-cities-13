import { FC } from 'react';
import OfferForm from './offer-form';
import OfferReviews from './offer-reviews';
import { useAppSelector } from '../../hooks/use-store';


const OfferAboutReviews : FC = () => {
  let comments = useAppSelector((state) => state.commentsData.comments)
    .slice().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const originalLength = comments.length;

  if (comments.length > 10) {
    comments = comments.slice(0, 10);
  }

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{originalLength}</span></h2>
      <OfferReviews comments={comments}/>
      <OfferForm/>
    </section>
  );
};

export default OfferAboutReviews;
