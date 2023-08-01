import OfferHost from './offer-host';
import { FC } from 'react';
import OfferPremiumMark from './offer-premium-mark';
import OfferAboutName from './offer-about-name';
import OfferAboutRating from './offer-about-rating';
import OfferAboutFeatures from './offer-about-features';
import OfferAboutPrice from './offer-about-price';
import OfferAboutInside from './offer-about-inside';
import OfferAboutReviews from './offer-about-reviews';
import { useAppSelector } from '../../hooks/use-store';

const OfferAbout : FC = () => {
  const authStatus = useAppSelector((state) => state.userData.authStatus);
  const offer = useAppSelector((state) => state.offerData.currentOffer);

  if (!offer) {
    return null;
  }

  return (
    <div className="offer__container container">
      <div className="offer__wrapper">
        <OfferPremiumMark isPremium={offer.isPremium} isOfferMark/>
        <OfferAboutName offer={offer} isFavorite={offer.isFavorite}/>
        <OfferAboutRating rating={offer.rating}/>
        <OfferAboutFeatures bedrooms={offer.bedrooms} maxAdults={offer.maxAdults} type={offer.type}/>
        <OfferAboutPrice price={offer.price}/>
        <OfferAboutInside goods={offer.goods}/>
        <OfferHost host={offer.host} description={offer.description}/>
        { authStatus === 'AUTH' ? <OfferAboutReviews/> : null}
      </div>
    </div>
  );
};

export default OfferAbout;
