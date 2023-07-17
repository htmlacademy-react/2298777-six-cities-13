import {Offer} from '../../types';
import cn from 'classnames';
import OfferLink from '../other/offer-link';

type FavoritesCardProps = {
  offer: Offer;
}

function FavoritesCard({offer} : FavoritesCardProps) : JSX.Element {
  return (
    <article className="favorites__card place-card">
      <div className={cn('place-card__mark', {'visually-hidden': !offer.isPremium})}>
        <span>Premium</span>
      </div>
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <OfferLink offerId={offer.id}>
          <img className="place-card__image" src={offer.previewImage} width="150" height="110" alt="Place image"/>
        </OfferLink>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(offer.rating) * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <OfferLink offerId={offer.id}>{offer.title}</OfferLink>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default FavoritesCard;
