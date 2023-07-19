import { Link } from 'react-router-dom';
import { AppRoutes, Cities } from '../../const';
import LoginForm from './login-form';
import { FC } from 'react';

const LoginMain : FC = () => (
  <main className="page__main page__main--login">
    <div className="page__login-container container">
      <section className="login">
        <h1 className="login__title">Sign in</h1>
        <LoginForm/>
      </section>
      <section className="locations locations--login locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={AppRoutes.Main} state={{ city: Cities.Amsterdam}}>
            <span>Amsterdam</span>
          </Link>
        </div>
      </section>
    </div>
  </main>
);

export default LoginMain;
