import {Link} from 'react-router-dom';
import {AppRoutes} from '../../const';
import cn from 'classnames';
import {FC} from 'react';
import { CityString } from '../../types/app-type';
import { Cities } from '../../const';

type MainLocationsProps = {
  currentCity : CityString;
}

const MainLocations : FC<MainLocationsProps> = ({currentCity}) => (
  <ul className="locations__list tabs__list">
    {Object.values(Cities).map((city) => (
      <li className="locations__item" key={city}>
        <Link
          className={cn('locations__item-link tabs__item', {'tabs__item--active': currentCity === city})}
          to={AppRoutes.Main}
          state={{city}}
        >
          <span>{city}</span>
        </Link>
      </li>
    ))}
  </ul>
);

export default MainLocations;
