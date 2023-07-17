import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const';

type FavoroteListItemProps = {
  city: string;
}

function FavoriteListItem({city, children} : PropsWithChildren<FavoroteListItemProps>) : JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={AppRoutes.Main} state={{ city: city}}>
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {children}
      </div>
    </li>);
}

export default FavoriteListItem;
