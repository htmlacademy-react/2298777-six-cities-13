import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const';
import { FC } from 'react';
import { LogoSize } from '../../const';

type LogoProps = {
  width?: number;
  height?: number;
}

const Logo : FC<LogoProps> = ({width = LogoSize.Width, height = LogoSize.Height}) => {
  const handleLogoClick = (evt? : React.MouseEvent<HTMLAnchorElement>) => {
    if (evt) {
      evt.preventDefault();
    }
  };
  return(
    <Link
      className="header__logo-link"
      to={AppRoutes.Main}
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
