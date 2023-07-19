import ProfileNavLink from './profile-nav-link';
import SignoutLink from './signout-link';
import { FC } from 'react';

const NavContainer : FC = () => (
  <nav className="header__nav">
    <ul className="header__nav-list">
      <ProfileNavLink/>
      <SignoutLink/>
    </ul>
  </nav>
);

export default NavContainer;
