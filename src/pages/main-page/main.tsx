import Logo from '../../components/logo/logo';
import { Cities } from '../../const';
import LocationItem from '../../components/locations-item/location-item';
import { Offers } from '../../types';
import React from 'react';
import { useLocation } from 'react-router-dom';
import MainOffersEmpty from '../../components/main-components/main-offers-empty/main-offers-empty';
import MainOffers from '../../components/main-components/main-offers/main-offers';

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
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo></Logo>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
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
