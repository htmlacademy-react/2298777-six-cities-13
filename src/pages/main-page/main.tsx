import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../../components/header/header-container';
import MainMain from '../../components/main-components/main-main';
import MainEmpty from '../../components/main-components/main-empty';
import { FC } from 'react';
import { useAppSelector } from '../../hooks/use-store';


const MainPage : FC = () => {
  const currentCityOffers = useAppSelector((state) => state.currentCityOffers);
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <HeaderContainer isNavShown/>

      {currentCityOffers?.length === 0 ?
        <MainEmpty/> :
        <MainMain/>}
    </div>);
};


export default MainPage;
