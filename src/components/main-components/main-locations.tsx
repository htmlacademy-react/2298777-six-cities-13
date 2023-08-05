import {Link} from 'react-router-dom';
import {AppRoutes} from '../../const';
import cn from 'classnames';
import {FC} from 'react';
import { Cities } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks/use-store';
import { offersData } from '../../store/slices/offers-data';

const MainLocations : FC = () => {
  const currentCity = useAppSelector((state) => state.offersData.currentCity);
  const dispatch = useAppDispatch();

  return (
    <ul className="locations__list tabs__list">
      {Object.values(Cities).map((city) => (
        <li className="locations__item" key={city}>
          <Link
            className={cn('locations__item-link tabs__item', {'tabs__item--active': currentCity === city})}
            to={AppRoutes.Main}
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(offersData.actions.setCurrentCity(city));
            }}
          >
            <span>{city}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MainLocations;
