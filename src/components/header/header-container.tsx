import Logo from '../other/logo';
import NavContainer from './nav-container';
import { FC } from 'react';

type HeaderContainerProps = {
  isNavShown: boolean;
}

const HeaderContainer : FC<HeaderContainerProps> = ({isNavShown}) => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <Logo/>
        </div>
        {isNavShown && <NavContainer/>}
      </div>
    </div>
  </header>
);

export default HeaderContainer;
