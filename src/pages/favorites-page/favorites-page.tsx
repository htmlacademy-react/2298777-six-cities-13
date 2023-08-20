import { Helmet } from 'react-helmet-async';
import Logo from '../../components/other/logo';
import HeaderContainer from '../../components/header/header-conainer/header-container';
import FavoritesMain from '../../components/favorites-components/favorites-main/favorites-main';
import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/use-store';
import FavoritesEmpty from '../../components/favorites-components/favorites-empty/favorites-empty';
import cn from 'classnames';
import { fetchFavoritesAction } from '../../store/api-actions/favorite';
import CheckError from '../../components/other/check-error';
import { getFavorites, getFavoritesError, getIsFavoritesLoading } from '../../store/slices/favorite-data/selectors';

const FavoritePage : FC = () => {
  const favorites = useAppSelector(getFavorites);
  const isLoading = useAppSelector(getIsFavoritesLoading);
  const error = useAppSelector(getFavoritesError);
  const dispatch = useAppDispatch();

  const onTryAgain = () => {
    dispatch(fetchFavoritesAction());
  };

  if (error || isLoading) {
    return <CheckError isLoading={isLoading} error={error} onTryAgain={onTryAgain}/>;
  }

  return(
    <div className={cn('page', {'page--favorites-empty': favorites.length === 0})} data-testid='favorites-page'>
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
