import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const';

const SignInLink : FC = () => (
  <Link className="header__nav-link header__nav-link--profile" to={AppRoutes.Login}>
    <div className="header__avatar-wrapper user__avatar-wrapper"/>
    <span className="header__login">Sign in</span>
  </Link>
);

export default SignInLink;
