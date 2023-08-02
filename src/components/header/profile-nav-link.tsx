import {FC} from 'react';
import { useAppSelector } from '../../hooks/use-store';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const';

const ProfileNavLink : FC = () => {
  const favoritesCount = useAppSelector((state) => state.favoriteData.favorites).length;
  const email = useAppSelector((state) => state.userData.user)?.email;
  return (
    <Link className="header__nav-link header__nav-link--profile" to={AppRoutes.Favorites}>
      <div className="header__avatar-wrapper user__avatar-wrapper"/>
      <span className="header__user-name user__name">{email}</span>
      <span className="header__favorite-count">{favoritesCount}</span>
    </Link>
  );
};

export default ProfileNavLink;
