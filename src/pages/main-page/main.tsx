import Logo from '../../components/logo/logo';
import { Cities } from '../../const';
import LocationItem from '../../components/locations-item/location-item';
import { Offers } from '../../types';
import React from 'react';
import { useLocation } from 'react-router-dom';
import MainOffersEmpty from '../../components/main-components/main-offers-empty/main-offers-empty';
import MainOffers from '../../components/main-components/main-offers/main-offers';
import { Helmet } from 'react-helmet-async';
import ProfileNavLink from '../../components/header-nav-links/profile-nav-link/profile-nav-link';
import SignoutLink from '../../components/header-nav-links/signout-link/signout-link';

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
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo/>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <ProfileNavLink/>
                <SignoutLink/>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {Object.values(Cities).map((c) => (
                <LocationItem
                  key={crypto.randomUUID()}
                  city={c}
                  currentCity={currentCity.city}
                />
              ))}
            </ul>
          </section>
        </div>
        <div className="cities">
          {offersInCurrentCity.length === 0 ?
            <MainOffersEmpty/> :
            <MainOffers city={currentCity.city} offersInCurrentCity={offersInCurrentCity}/>}
        </div>
      </main>
    </div>);
}

export default MainPage;
