import { FC } from 'react';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../../hooks/use-store';
import { DetailedOffer, Offer } from '../../../types/app-type';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../const';
import { postFavoriteAction } from '../../../store/api-actions/favorite';
import { getAuthStatus } from '../../../store/slices/user-data/selectors';

type OfferBookmarkButtonProps = {
  isFavorite: boolean;
  width?: number;
  height?: number;
  offer: Offer | DetailedOffer;
}

const OfferBookmarkButton : FC<OfferBookmarkButtonProps> = ({isFavorite, width = 18, height = 19, offer}) => {
  const [classButton, classIcon, classActive] = width === 18 ?
    ['place-card__bookmark-button', 'place-card__bookmark-icon', 'place-card__bookmark-button--active'] :
    ['offer__bookmark-button', 'offer__bookmark-icon', 'offer__bookmark-button--active'];
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authStatus = useAppSelector(getAuthStatus);
  const handleBookmarkClick = (evt? : React.MouseEvent<HTMLButtonElement>) => {
    if (evt) {
      evt.preventDefault();
    }
  };
  return (
    <button
      className={cn(classButton, 'button', {[classActive]: isFavorite})}
      type="button"
      onClick={() => {
        if (authStatus === 'AUTH') {
          dispatch(postFavoriteAction({offerId: offer.id, status: !offer.isFavorite}));
        } else {
          navigate(AppRoutes.Login);
        }
      }}
      onMouseDown={handleBookmarkClick}
      onKeyUp={(evt) => {
        if (evt.key === 'Enter' || evt.key === 'Space') {
          handleBookmarkClick();
        }
      }}
      data-testid='offer-bookmark-button'
    >
      <svg className={classIcon} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

export default OfferBookmarkButton;
