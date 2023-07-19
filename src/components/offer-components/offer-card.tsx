import { Offer } from '../../types';
import cn from 'classnames';
import OfferLink from '../other/offer-link';
import { FC } from 'react';
import OfferCardInfo from './offer-card-info';

type OfferCardProps = {
  offer: Offer;
  onOfferHover?: (id : string) => void;
}

const OfferCard : FC<OfferCardProps> = ({offer, onOfferHover}) => {

  const handleOfferHover = () => {
    onOfferHover?.(offer.id);
  };

  return (
    <article className="cities__card place-card" onMouseEnter={handleOfferHover}>
      <div className={cn('place-card__mark', {'visually-hidden': !offer.isPremium})}>
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <OfferLink offerId={offer.id}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image"/>
        </OfferLink>
      </div>
      <OfferCardInfo offer={offer}/>
    </article>);
};

export default OfferCard;
