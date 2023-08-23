import { FC } from 'react';
import OfferCardInfo from '../offer-card-info/offer-card-info';
import OfferPremiumMark from '../offer-premium-mark/offer-premium-mark';
import OfferImageWrapper from '../offer-image-wrapper/offer-image-wrapper';
import { useAppDispatch } from '../../../hooks/use-store';
import { offersData } from '../../../store/slices/offers-data/offers-data';
import { Offer } from '../../../types/app-type';
import cn from 'classnames';


const OfferCard : FC<{offer: Offer; isNearByCard?: boolean}> = ({offer, isNearByCard = false}) => {
  const dispatch = useAppDispatch();

  const handleOfferHover = () => {
    dispatch(offersData.actions.setSelectedPoint(offer.location));
  };

  const handleOfferLeave = () => {
    dispatch(offersData.actions.setSelectedPoint(null));
  };

  return (
    <article className={cn({'cities__card': !isNearByCard}, 'place-card', {'near-places__card': isNearByCard})}
      onMouseEnter={handleOfferHover}
      onMouseLeave={handleOfferLeave}
      data-testid='offer-card'
    >
      {offer.isPremium && <OfferPremiumMark isPremium={offer.isPremium}/>}
      <OfferImageWrapper offer={offer}/>
      <OfferCardInfo offer={offer}/>
    </article>);
};

export default OfferCard;
