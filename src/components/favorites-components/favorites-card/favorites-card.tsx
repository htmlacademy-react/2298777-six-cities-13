import {Offer} from '../../../types/app-type';
import {FC} from 'react';
import OfferCardInfo from '../../offer-components/offer-card-info';
import OfferPremiumMark from '../../offer-components/offer-premium-mark';
import OfferImageWrapper from '../../offer-components/offer-image-wrapper';

type FavoritesCardProps = {
  offer: Offer;
}

const FavoritesCard : FC<FavoritesCardProps> = ({offer}) => (
  <article className="favorites__card place-card" data-testid='favorites-card'>
    <OfferPremiumMark isPremium={offer.isPremium}/>
    <OfferImageWrapper offer={offer} isFavoriteCard/>
    <OfferCardInfo offer={offer} isFavoriteCard/>
  </article>
);

export default FavoritesCard;
