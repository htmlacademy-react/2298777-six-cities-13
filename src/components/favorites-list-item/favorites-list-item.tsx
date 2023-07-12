import { PropsWithChildren } from 'react';

type FavoroteListItemProps = {
  city: string;
}

function FavoriteListItem({city, children} : PropsWithChildren<FavoroteListItemProps>) : JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {children}
      </div>
    </li>);
}

export default FavoriteListItem;
