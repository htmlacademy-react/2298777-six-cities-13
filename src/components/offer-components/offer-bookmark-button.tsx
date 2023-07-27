import { FC } from 'react';
import cn from 'classnames';

type OfferBookmarkButtonProps = {
  isFavorite: boolean;
  width?: number;
  height?: number;
}

const OfferBookmarkButton : FC<OfferBookmarkButtonProps> = ({isFavorite, width = 18, height = 19}) => {
  const [classButton, classIcon, classActive] = width === 18 ?
    ['place-card__bookmark-button', 'place-card__bookmark-icon', 'place-card__bookmark-button--active'] :
    ['offer__bookmark-button', 'offer__bookmark-icon', 'offer__bookmark-button--active'];

  return (
    <button
      className={cn(classButton, 'button', {[classActive]: isFavorite})}
      type="button"
    >
      <svg className={classIcon} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

export default OfferBookmarkButton;
