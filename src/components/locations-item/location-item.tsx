import {Link} from 'react-router-dom';
import {AppRoutes} from '../../const';

type LocationItemProps = {
  city : string;
  currentCity : string;
}

function LocationItem({city, currentCity} : LocationItemProps) : JSX.Element {
  return (
    <li className="locations__item">
      <Link
        className={`locations__item-link tabs__item ${currentCity === city ? 'tabs__item--active' : ''}`}
        to={AppRoutes.Main}
        state={{city : city}}
      >
        <span>{city}</span>
      </Link>
    </li>
  );
}

export default LocationItem;
