import {Offer} from '../../types';
import cn from 'classnames';
import OfferLink from '../other/offer-link';
import {FC} from 'react';
import FavoriteCardInfo from './favorite-card-info';

type FavoritesCardProps = {
  offer: Offer;
}

const FavoritesCard : FC<FavoritesCardProps> = ({offer}) => (
  <article className="favorites__card place-card">
    <div className={cn('place-card__mark', {'visually-hidden': !offer.isPremium})}>
      <span>Premium</span>
    </div>
    <div className="favorites__image-wrapper place-card__image-wrapper">
      <OfferLink offerId={offer.id}>
        <img className="place-card__image" src={offer.previewImage} width="150" height="110" alt="Place image"/>
      </OfferLink>
    </div>
    <FavoriteCardInfo offer={offer}/>
  </article>
);

export default FavoritesCard;
