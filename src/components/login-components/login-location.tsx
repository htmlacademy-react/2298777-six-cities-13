import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes, Cities } from '../../const';

const LoginLocation : FC = () => (
  <section className="locations locations--login locations--current">
    <div className="locations__item">
      <Link className="locations__item-link" to={AppRoutes.Main} state={{ city: Cities.Amsterdam}}>
        <span>Amsterdam</span>
      </Link>
    </div>
  </section>
);

export default LoginLocation;
