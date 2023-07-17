import { Comments, DetailedOffers } from '../../types';
import OfferImage from './offer-image';
import OfferInsideItem from './offer-inside-item';
import OfferReview from './offer-review';
import OfferForm from './offer-form';
import cn from 'classnames';
import Map from '../other/map';
import OfferCard from './offer-card';
import { Navigate } from 'react-router-dom';
import { AppRoutes } from '../../const';

type OfferMainProps = {
  comments: Comments;
  detailedOffers: DetailedOffers;
  id: string;
}

function OfferMain({comments, detailedOffers, id} : OfferMainProps) : JSX.Element {
  const detailedOffer = detailedOffers.find((offer) => offer.id === id);
  if (!detailedOffer) {
    return (<Navigate to={AppRoutes.NotFound}/>);
  }
  const otherPlaces = detailedOffers.filter((offer) => offer.id !== id && offer.city.name === detailedOffer?.city.name);
  return (
    <main className="page__main page__main--offer">
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {detailedOffer.images.map((image) => (<OfferImage key={image} imageAddress={image}/>))}
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            <div className={cn('offer__mark', {'visually-hidden': !detailedOffer.isPremium})}>
              <span>Premium</span>
            </div>
            <div className="offer__name-wrapper">
              <h1 className="offer__name">
                {detailedOffer.title}
              </h1>
              <button className="offer__bookmark-button button" type="button">
                <svg className="offer__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{width: `${Math.round(detailedOffer.rating) * 20}%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">{detailedOffer.rating}</span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                {detailedOffer.type}
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                {detailedOffer.bedrooms} Bedrooms
              </li>
              <li className="offer__feature offer__feature--adults">
                  Max {detailedOffer.maxAdults} adults
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{detailedOffer.price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                {detailedOffer.goods.map((good) => <OfferInsideItem key={good} item={good}/>)}
              </ul>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="offer__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar"/>
                </div>
                <span className="offer__user-name">
                  {detailedOffer.host.name}
                </span>
                <span className="offer__user-status">
                  {detailedOffer.host.isPro ? 'Pro' : ''}
                </span>
              </div>
              <div className="offer__description">
                <p className="offer__text">
                  {detailedOffer.description}
                </p>
              </div>
            </div>
            <section className="offer__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
              <ul className="reviews__list">
                {comments.map((comment) => (<OfferReview key={comment.id} comment={comment}/>))}
              </ul>
              <OfferForm/>
            </section>
          </div>
        </div>
        <Map
          city={detailedOffer.city}
          points={otherPlaces.map((offer) => offer.location)}
          className={'offer__map'}
          isHoverActive={false}
        />
      </section>
      <div className="container">
        <section className={cn('near-places places', {'visually-hidden': otherPlaces.length === 0})}>
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {otherPlaces.map((offer) => (<OfferCard key={offer.id} offer={offer}/>))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default OfferMain;
