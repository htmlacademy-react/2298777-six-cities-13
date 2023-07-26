import { Offer } from '../../types/app-type';
import { FC } from 'react';
import OfferCardInfo from './offer-card-info';
import OfferPremiumMark from './offer-premium-mark';
import OfferImageWrapper from './offer-image-wrapper';

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
      <OfferPremiumMark isPremium={offer.isPremium}/>
      <OfferImageWrapper offer={offer}/>
      <OfferCardInfo offer={offer}/>
    </article>);
};

export default OfferCard;
