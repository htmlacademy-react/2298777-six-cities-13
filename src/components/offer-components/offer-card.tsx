import { FC } from 'react';
import OfferCardInfo from './offer-card-info';
import OfferPremiumMark from './offer-premium-mark';
import OfferImageWrapper from './offer-image-wrapper';
import { useAppDispatch, useAppSelector } from '../../hooks/use-store';
import { offersData } from '../../store/slices/offers-data/offers-data';
import { getOffer } from '../../store/slices/offers-data/selectors';


const OfferCard : FC<{index: number}> = ({index}) => {
  const dispatch = useAppDispatch();
  const offer = useAppSelector((state) => getOffer(state, index));

  const handleOfferHover = () => {
    dispatch(offersData.actions.setSelectedPoint(offer.location));
  };

  return (
    <article className="cities__card place-card" onMouseEnter={handleOfferHover}>
      <OfferPremiumMark isPremium={offer.isPremium}/>
      <OfferImageWrapper offer={offer}/>
      <OfferCardInfo offer={offer}/>
    </article>);
};

export default OfferCard;
