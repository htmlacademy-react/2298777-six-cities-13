import { Helmet } from 'react-helmet-async';
import Logo from '../../components/other/logo';
import HeaderContainer from '../../components/header/header-container';
import FavoritesMain from '../../components/favorites-components/favorites-main';
import { FC } from 'react';
import { useAppSelector } from '../../hooks/use-store';
import FavoritesEmpty from '../../components/favorites-components/favorites-empty';
import cn from 'classnames';

const FavoritePage : FC = () => {
  const favorites = useAppSelector((state) => state.favorites);
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
