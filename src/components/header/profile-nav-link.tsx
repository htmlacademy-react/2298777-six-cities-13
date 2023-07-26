import {FC} from 'react';

const ProfileNavLink : FC = () => (
  <a className="header__nav-link header__nav-link--profile" href="#">
    <div className="header__avatar-wrapper user__avatar-wrapper">
    </div>
    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
    <span className="header__favorite-count">3</span>
  </a>
);

export default ProfileNavLink;
