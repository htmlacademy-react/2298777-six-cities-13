import {Link} from 'react-router-dom';
import {AppRoutes} from '../../const';
import cn from 'classnames';

type LocationItemProps = {
  city : string;
  currentCity : string;
}

function LocationItem({city, currentCity} : LocationItemProps) : JSX.Element {
  return (
    <li className="locations__item">
      <Link
        className={cn('locations__item-link tabs__item', {'tabs__item--active': currentCity === city})}
        to={AppRoutes.Main}
        state={{city : city}}
      >
        <span>{city}</span>
      </Link>
    </li>
  );
}

export default LocationItem;
