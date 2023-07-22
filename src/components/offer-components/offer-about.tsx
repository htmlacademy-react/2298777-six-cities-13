import { Comments, DetailedOffer } from '../../types';
import OfferInsideItem from './offer-inside-item';
import OfferReview from './offer-review';
import OfferForm from './offer-form';
import OfferBookmarkButton from './offer-bookmark-button';
import OfferHost from './offer-host';
import cn from 'classnames';
import { FC } from 'react';
import { getStarWidth } from '../../util';

type OfferAboutProps = {
  offer: DetailedOffer;
  comments: Comments;
};

const OfferAbout : FC<OfferAboutProps> = ({offer, comments}) => (
  <div className="offer__container container">
    <div className="offer__wrapper">
      <div className={cn('offer__mark', {'visually-hidden': !offer.isPremium})}>
        <span>Premium</span>
      </div>
      <div className="offer__name-wrapper">
        <h1 className="offer__name">
          {offer.title}
        </h1>
        <OfferBookmarkButton isFavorite={offer.isFavorite} width={31} height={33}/>
      </div>
      <div className="offer__rating rating">
        <div className="offer__stars rating__stars">
          <span style={{width: getStarWidth(offer.rating)}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="offer__rating-value rating__value">{offer.rating}</span>
      </div>
      <ul className="offer__features">
        <li className="offer__feature offer__feature--entire">
          {offer.type}
        </li>
        <li className="offer__feature offer__feature--bedrooms">
          {offer.bedrooms} Bedrooms
        </li>
        <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} adults
        </li>
      </ul>
      <div className="offer__price">
        <b className="offer__price-value">&euro;{offer.price}</b>
        <span className="offer__price-text">&nbsp;night</span>
      </div>
      <div className="offer__inside">
        <h2 className="offer__inside-title">What&apos;s inside</h2>
        <ul className="offer__inside-list">
          {offer.goods.map((good) => <OfferInsideItem key={good} item={good}/>)}
        </ul>
      </div>
      <OfferHost offer={offer}/>
      <section className="offer__reviews reviews">
        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
        <ul className="reviews__list">
          {comments.map((comment) => (<OfferReview key={comment.id} comment={comment}/>))}
        </ul>
        <OfferForm/>
      </section>
    </div>
  </div>
);

export default OfferAbout;
