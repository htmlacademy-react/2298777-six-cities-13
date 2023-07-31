import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../../components/header/header-container';
import MainMain from '../../components/main-components/main-main';
import MainEmpty from '../../components/main-components/main-empty';
import { FC } from 'react';
import { useAppSelector } from '../../hooks/use-store';
import Loading from '../../components/other/loading/loading';


const MainPage : FC = () => {
  const isOffersLoading = useAppSelector((state) => state.isOffersLoading);
  if (isOffersLoading) {
    return <Loading/>;
  }
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <HeaderContainer isNavShown/>

      <MainEmpty/>
      <MainMain/>
    </div>);
};


export default MainPage;
