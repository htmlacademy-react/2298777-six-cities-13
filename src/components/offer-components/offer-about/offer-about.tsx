import OfferHost from '../offer-host/offer-host';
import { FC } from 'react';
import OfferPremiumMark from '../offer-premium-mark/offer-premium-mark';
import OfferAboutName from '../offer-about-name/offer-about-name';
import OfferAboutRating from '../offer-about-rating/offer-about-rating';
import OfferAboutFeatures from '../offer-about-features/offer-about-features';
import OfferAboutPrice from '../offer-about-price/offer-about-price';
import OfferAboutInside from '../offer-about-inside/offer-about-inside';
import OfferAboutReviews from '../offer-about-reviews/offer-about-reviews';
import { useAppSelector } from '../../../hooks/use-store';
import { getCurrentOffer } from '../../../store/slices/offer-data/selectors';

const OfferAbout : FC = () => {
  const offer = useAppSelector(getCurrentOffer);

  if (!offer) {
    return null;
  }

  return (
    <div className="offer__container container" data-testid='offer-about'>
      <div className="offer__wrapper">
        {offer.isPremium && <OfferPremiumMark isPremium={offer.isPremium} isOfferMark/>}
        <OfferAboutName offer={offer} isFavorite={offer.isFavorite}/>
        <OfferAboutRating rating={offer.rating}/>
        <OfferAboutFeatures bedrooms={offer.bedrooms} maxAdults={offer.maxAdults} type={offer.type}/>
        <OfferAboutPrice price={offer.price}/>
        <OfferAboutInside goods={offer.goods}/>
        <OfferHost host={offer.host} description={offer.description}/>
        <OfferAboutReviews/>
      </div>
    </div>
  );
};

export default OfferAbout;
