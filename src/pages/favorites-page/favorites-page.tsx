import { Helmet } from 'react-helmet-async';
import Logo from '../../components/other/logo';
import HeaderContainer from '../../components/header/header-container';
import FavoritesMain from '../../components/favorites-components/favorites-main';
import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/use-store';
import FavoritesEmpty from '../../components/favorites-components/favorites-empty';
import cn from 'classnames';
import ErrorMessage from '../../components/other/error-message/error-message';
import { fetchFavoritesAction } from '../../store/api-actions/favorite';
import { checkAuthAction } from '../../store/api-actions/user';

const FavoritePage : FC = () => {
  const favorites = useAppSelector((state) => state.favoriteData.favorites);
  const error = useAppSelector((state) => state.favoriteData.error);
  const dispatch = useAppDispatch();

  const onTryAgain = () => {
    dispatch(checkAuthAction());
    dispatch(fetchFavoritesAction());
  };

  if (error) {
    return <ErrorMessage message={error} onTryAgain={onTryAgain}/>;
  }

  return(
    <div className={cn('page', {'page--favorites-empty': favorites.length === 0})}>
      <Helmet>
        <title>6 cities - Favorites</title>
      </Helmet>
      <HeaderContainer isNavShown/>

      {favorites.length ? <FavoritesMain/> : <FavoritesEmpty/>}
      <footer className="footer container">
        <Logo width={64} height={33}/>
      </footer>
    </div>
  );
};


export default FavoritePage;
