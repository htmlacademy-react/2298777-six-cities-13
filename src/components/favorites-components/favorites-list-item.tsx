import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const';
import { FC } from 'react';
import { CityString } from '../../types/app-type';
import { useAppDispatch } from '../../hooks/use-store';
import { setCurrentCity } from '../../store/action';

type FavoroteListItemProps = {
  city: CityString;
}

const FavoriteListItem : FC<PropsWithChildren<FavoroteListItemProps>> = ({city, children}) => {
  const dispatch = useAppDispatch();
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={AppRoutes.Main} onClick={() => dispatch(setCurrentCity(city))}>
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {children}
      </div>
    </li>
  );
};

export default FavoriteListItem;
