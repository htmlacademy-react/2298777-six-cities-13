import { Offer } from '../../types/app-type';
import OfferBookmarkButton from './offer-bookmark-button';
import { FC } from 'react';

type OfferPriceProps = {
  offer: Offer;
}

const OfferPrice : FC<OfferPriceProps> = ({offer}) => (
  <div className="place-card__price-wrapper">
    <div className="place-card__price">
      <b className="place-card__price-value">&euro;{offer.price}</b>
      <span className="place-card__price-text">&#47;&nbsp;night</span>
    </div>
    <OfferBookmarkButton isFavorite={offer.isFavorite}/>
  </div>
);

export default OfferPrice;
