import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const';
import { FC } from 'react';

type LogoProps = {
  width?: number;
  height?: number;
}

const Logo : FC<LogoProps> = ({width = 81, height = 41}) => (
  <Link className="header__logo-link" to={AppRoutes.Main}>
    <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={width} height={height}/>
  </Link>
);

export default Logo;
