import { FC } from 'react';
import { Offer } from '../../types';
import OfferBookmarkButton from './offer-bookmark-button';
import OfferLink from '../other/offer-link';
import { getStarWidth } from '../../util';

type OfferCardInfoProps = {
  offer: Offer;
};

const OfferCardInfo : FC<OfferCardInfoProps> = ({offer}) => (
  <div className="place-card__info">
    <div className="place-card__price-wrapper">
      <div className="place-card__price">
        <b className="place-card__price-value">&euro;{offer.price}</b>
        <span className="place-card__price-text">&#47;&nbsp;night</span>
      </div>
      <OfferBookmarkButton isFavorite={offer.isFavorite}/>
    </div>
    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span style={{width: getStarWidth(offer.rating)}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
    <h2 className="place-card__name">
      <OfferLink offerId={offer.id}>{offer.title}</OfferLink>
    </h2>
    <p className="place-card__type">{offer.type}</p>
  </div>
);

export default OfferCardInfo;
