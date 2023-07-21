import Logo from '../other/logo';
import NavContainer from './nav-container';
import { FC } from 'react';
import { CityString } from '../../types';

type HeaderContainerProps = {
  isNavShown: boolean;
  city?: CityString;
}

const HeaderContainer : FC<HeaderContainerProps> = ({isNavShown, city}) => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <Logo city={city}/>
        </div>
        {isNavShown && <NavContainer/>}
      </div>
    </div>
  </header>
);

export default HeaderContainer;
