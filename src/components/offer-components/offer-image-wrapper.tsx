import { FC } from 'react';
import { Offer } from '../../types/app-type';
import OfferLink from '../other/offer-link';
import cn from 'classnames';


type OfferImageWrapperProps = {
  offer: Offer;
  isFavoriteCard?: boolean;
};

const OfferImageWrapper : FC<OfferImageWrapperProps> = ({offer, isFavoriteCard = false}) => (
  <div className={cn({'cities__image-wrapper': !isFavoriteCard}, {'favorites__image-wrapper': isFavoriteCard}, 'place-card__image-wrapper')}>
    <OfferLink offerId={offer.id}>
      <img className="place-card__image" src={offer.previewImage} width={isFavoriteCard ? 150 : 260} height={isFavoriteCard ? 110 : 200} alt="Place image"/>
    </OfferLink>
  </div>
);

export default OfferImageWrapper;
