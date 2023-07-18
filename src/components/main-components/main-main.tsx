import { Cities } from '../../const';
import { Offers } from '../../types';
import MainLocations from './main-locations';
import MainOffers from './main-offers';

type MainMainProps = {
  offersInCurrentCity: Offers;
  city: string;
}


function MainMain({offersInCurrentCity, city} : MainMainProps) : JSX.Element {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {Object.values(Cities).map((c) => (
              <MainLocations
                key={c}
                city={c}
                currentCity={city}
              />
            ))}
          </ul>
        </section>
      </div>
      <div className="cities">
        {<MainOffers city={city} offersInCurrentCity={offersInCurrentCity}/>}
      </div>
    </main>
  );
}

export default MainMain;
