import ProfileNavLink from '../profile-nav-link';
import SignOutLink from '../sign-out-link';
import { FC } from 'react';
import { useAppSelector } from '../../../hooks/use-store';
import SignInLink from '../sign-in-link';
import { AuthorizationStatus } from '../../../const';
import { getAuthStatus } from '../../../store/slices/user-data/selectors';

const NavContainer : FC = () => {
  const authStatus = useAppSelector(getAuthStatus);
  return (
    <nav className="header__nav" data-testid='header-nav'>
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          {authStatus === AuthorizationStatus.Auth && <ProfileNavLink/>}
        </li>
        <li className="header__nav-item">
          {authStatus === AuthorizationStatus.Auth ? <SignOutLink/> : <SignInLink/>}
        </li>
      </ul>
    </nav>
  );
};

export default NavContainer;
