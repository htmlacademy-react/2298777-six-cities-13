import { FC } from 'react';
import { Offer } from '../../types';
import OfferPrice from '../offer-components/offer-price';
import OfferRating from './offer-rating';
import OfferName from './offer-name';
import cn from 'classnames';

type OfferCardInfoProps = {
  offer: Offer;
  isFavoriteCard? : boolean;
};

const OfferCardInfo : FC<OfferCardInfoProps> = ({offer, isFavoriteCard = false}) => (
  <div className={cn({'favorites__card-info': isFavoriteCard}, 'place-card__info')}>
    <OfferPrice offer={offer}/>
    <OfferRating offer={offer}/>
    <OfferName offer={offer}/>
    <p className="place-card__type">{offer.type}</p>
  </div>
);

export default OfferCardInfo;
