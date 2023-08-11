import {FC} from 'react';
import { useAppSelector } from '../../hooks/use-store';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const';
import { getFavorites } from '../../store/slices/favorite-data/selectors';
import { getUserData } from '../../store/slices/user-data/selectors';

const ProfileNavLink : FC = () => {
  const favoritesCount = useAppSelector(getFavorites).length;
  const email = useAppSelector(getUserData)?.email;
  return (
    <Link className="header__nav-link header__nav-link--profile" to={AppRoutes.Favorites}>
      <div className="header__avatar-wrapper user__avatar-wrapper"/>
      <span className="header__user-name user__name">{email}</span>
      <span className="header__favorite-count">{favoritesCount}</span>
    </Link>
  );
};

export default ProfileNavLink;
