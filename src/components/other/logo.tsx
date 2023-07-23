import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const';
import { FC } from 'react';
import { CityString } from '../../types/app-type';

type LogoProps = {
  width?: number;
  height?: number;
  city?: CityString;
}

const Logo : FC<LogoProps> = ({width = 81, height = 41, city}) => {
  const handleLogoClick = (evt? : React.MouseEvent<HTMLAnchorElement>) => {
    if (evt) {
      evt.preventDefault();
    }
  };
  return(
    <Link
      className="header__logo-link"
      to={AppRoutes.Main} state={{city}}
      onMouseDown={handleLogoClick}
      onKeyUp={(evt) => {
        if (evt.key === 'Enter' || evt.key === 'Space') {
          handleLogoClick();
        }
      }}
    >
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={width} height={height}/>
    </Link>);
};

export default Logo;
