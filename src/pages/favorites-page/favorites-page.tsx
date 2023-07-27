import { Helmet } from 'react-helmet-async';
import Logo from '../../components/other/logo';
import HeaderContainer from '../../components/header/header-container';
import FavoritesMain from '../../components/favorites-components/favorites-main';
import { FC } from 'react';
import { useAppSelector } from '../../hooks/use-store';
import FavoritesEmpty from '../../components/favorites-components/favorites-empty';

const FavoritePage : FC = () => {
  const favorites = useAppSelector((state) => state.favorites);
  return(
    <div className="page page--favorites-empty">
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
