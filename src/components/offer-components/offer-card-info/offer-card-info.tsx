import { FC } from 'react';
import { DetailedOffer, Offer } from '../../../types/app-type';
import OfferPrice from '../offer-price';
import OfferRating from '../offer-rating';
import OfferName from '../offer-name';
import cn from 'classnames';

type OfferCardInfoProps = {
  offer: Offer | DetailedOffer;
  isFavoriteCard? : boolean;
};

const OfferCardInfo : FC<OfferCardInfoProps> = ({offer, isFavoriteCard = false}) => (
  <div className={cn({'favorites__card-info': isFavoriteCard}, 'place-card__info')} data-testid='offer-card-info'>
    <OfferPrice offer={offer}/>
    <OfferRating offer={offer}/>
    <OfferName offer={offer}/>
    <p className="place-card__type">{offer.type}</p>
  </div>
);

export default OfferCardInfo;
