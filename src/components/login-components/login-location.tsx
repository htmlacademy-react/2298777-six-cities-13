import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const';
import { useAppDispatch } from '../../hooks/use-store';
import { setCurrentCity } from '../../store/action';
import { Cities } from '../../const';

const LoginLocation : FC = () => {
  const dispatch = useAppDispatch();
  return (
    <section className="locations locations--login locations--current">
      <div className="locations__item">
        <Link className="locations__item-link" to={AppRoutes.Main} onClick={() => dispatch(setCurrentCity(Cities.Amsterdam))}>
          <span>Amsterdam</span>
        </Link>
      </div>
    </section>
  );
};

export default LoginLocation;
