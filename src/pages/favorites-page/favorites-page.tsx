import { Helmet } from 'react-helmet-async';
import Logo from '../../components/other/logo';
import HeaderContainer from '../../components/header/header-container';
import FavoritesMain from '../../components/favorites-components/favorites-main';
import { FC } from 'react';

const FavoritePage : FC = () => (
  <div className="page">
    <Helmet>
      <title>6 cities - Favorites</title>
    </Helmet>
    <HeaderContainer isNavShown/>

    <FavoritesMain/>
    <footer className="footer container">
      <Logo width={64} height={33}/>
    </footer>
  </div>
);


export default FavoritePage;
