import {Link} from 'react-router-dom';
import {AppRoutes} from '../../const';
import cn from 'classnames';
import {FC} from 'react';

type MainLocationsProps = {
  city : string;
  currentCity : string;
}

const MainLocations : FC<MainLocationsProps> = ({city, currentCity}) => (
  <li className="locations__item">
    <Link
      className={cn('locations__item-link tabs__item', {'tabs__item--active': currentCity === city})}
      to={AppRoutes.Main}
      state={{city}}
    >
      <span>{city}</span>
    </Link>
  </li>
);

export default MainLocations;
