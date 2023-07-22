import { FC } from 'react';
import OfferBookmarkButton from './offer-bookmark-button';

type OfferAboutNameProps = {
  title : string;
  isFavorite : boolean;
};

const OfferAboutName : FC<OfferAboutNameProps> = ({title, isFavorite}) => (
  <div className="offer__name-wrapper">
    <h1 className="offer__name">
      {title}
    </h1>
    <OfferBookmarkButton isFavorite={isFavorite} width={31} height={33}/>
  </div>
);

export default OfferAboutName;
