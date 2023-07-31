import { Offer } from '../../types/app-type';
import { FC } from 'react';
import OfferCardInfo from './offer-card-info';
import OfferPremiumMark from './offer-premium-mark';
import OfferImageWrapper from './offer-image-wrapper';
import { useAppDispatch } from '../../hooks/use-store';
import { setSelectedPointAction } from '../../store/action';

type OfferCardProps = {
  offer: Offer;
  isFavoriteButtonDisabled: boolean;
}

const OfferCard : FC<OfferCardProps> = ({offer, isFavoriteButtonDisabled}) => {
  const dispatch = useAppDispatch();

  const handleOfferHover = () => {
    dispatch(setSelectedPointAction(offer.location));
  };

  return (
    <article className="cities__card place-card" onMouseEnter={handleOfferHover}>
      <OfferPremiumMark isPremium={offer.isPremium}/>
      <OfferImageWrapper offer={offer}/>
      <OfferCardInfo offer={offer} isFavoriteButtonDisabled={isFavoriteButtonDisabled}/>
    </article>);
};

export default OfferCard;
