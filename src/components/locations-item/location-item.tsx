type LocationItemProps = {
  city : string;
  currentCity : string;
}

function LocationItem({city, currentCity} : LocationItemProps) : JSX.Element {
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${currentCity === city ? 'tabs__item--active' : ''}`} href="#">
        <span>{city}</span>
      </a>
    </li>
  );
}

export default LocationItem;
