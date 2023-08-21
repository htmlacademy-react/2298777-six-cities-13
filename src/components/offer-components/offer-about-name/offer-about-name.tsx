import { FC } from 'react';
import OfferBookmarkButton from '../offer-bookmark-button/offer-bookmark-button';
import { DetailedOffer } from '../../../types/app-type';

type OfferAboutNameProps = {
  offer : DetailedOffer;
  isFavorite : boolean;
};

const OfferAboutName : FC<OfferAboutNameProps> = ({offer, isFavorite}) => (
  <div className="offer__name-wrapper">
    <h1 className="offer__name">
      {offer.title}
    </h1>
    <OfferBookmarkButton isFavorite={isFavorite} width={31} height={33} offer={offer}/>
  </div>
);

export default OfferAboutName;
