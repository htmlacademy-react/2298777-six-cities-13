import { DetailedOffer } from '../../types/app-type';
import OfferHost from './offer-host';
import { FC } from 'react';
import OfferPremiumMark from './offer-premium-mark';
import OfferAboutName from './offer-about-name';
import OfferAboutRating from './offer-about-rating';
import OfferAboutFeatures from './offer-about-features';
import OfferAboutPrice from './offer-about-price';
import OfferAboutInside from './offer-about-inside';
import OfferAboutReviews from './offer-about-reviews';

type OfferAboutProps = {
  offer: DetailedOffer;
};

const OfferAbout : FC<OfferAboutProps> = ({offer}) => (
  <div className="offer__container container">
    <div className="offer__wrapper">
      <OfferPremiumMark isPremium={offer.isPremium} isOfferMark/>
      <OfferAboutName offer={offer} isFavorite={offer.isFavorite}/>
      <OfferAboutRating rating={offer.rating}/>
      <OfferAboutFeatures offer={offer}/>
      <OfferAboutPrice price={offer.price}/>
      <OfferAboutInside goods={offer.goods}/>
      <OfferHost offer={offer}/>
      <OfferAboutReviews/>
    </div>
  </div>
);

export default OfferAbout;
