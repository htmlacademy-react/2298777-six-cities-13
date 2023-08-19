import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const';
import { FC } from 'react';
import { CityString } from '../../types/app-type';
import { useAppDispatch } from '../../hooks/use-store';
import { offersData } from '../../store/slices/offers-data/offers-data';

const FavoriteLocation : FC<{city: CityString}> = ({city}) => {
  const dispatch = useAppDispatch();
  return (
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <Link
          className="locations__item-link"
          to={AppRoutes.Main}
          onClick={() => dispatch(offersData.actions.setCurrentCity(city))}
        >
          <span>{city}</span>
        </Link>
      </div>
    </div>
  );
};

export default FavoriteLocation;
