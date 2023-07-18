import { Cities } from '../../const';
import { Offers } from '../../types';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../../components/header/header-container';
import MainMain from '../../components/main-components/main-main';
import MainEmpty from '../../components/main-components/main-empty';

type MainPageProps = {
  offers: Offers;
  city?: string;
}

function MainPage({offers, city = Cities.Paris} : MainPageProps) : JSX.Element {
  const location = useLocation().state as {city : string};
  city = location?.city ?? city;
  const [currentCity, setCurrentCity] = React.useState({city : city});
  if (city !== currentCity.city) {
    setCurrentCity({city : city});
  }
  const offersInCurrentCity = offers.filter((offer) => offer.city.name === currentCity.city);
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <HeaderContainer isNavShown/>

      {offersInCurrentCity.length === 0 ?
        <MainEmpty city={currentCity.city}/> :
        <MainMain offersInCurrentCity={offersInCurrentCity} city={currentCity.city}/>}
    </div>);
}

export default MainPage;
