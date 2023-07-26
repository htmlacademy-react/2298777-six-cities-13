import OfferGallery from './offer-gallery';
import cn from 'classnames';
import Map from '../other/map';
import OfferCard from './offer-card';
import { Navigate } from 'react-router-dom';
import { AppRoutes } from '../../const';
import { FC } from 'react';
import OfferAbout from './offer-about';
import { useAppSelector } from '../../hooks/use-store';
import { useAppDispatch } from '../../hooks/use-store';
import { setCurrentCity, setCurrentOffer } from '../../store/action';

const OfferMain : FC<{id: string}> = ({id}) => {
  const dispatch = useAppDispatch();
  const detailedOffers = useAppSelector((state) => state.detailedOffers);
  const detailedOffer = detailedOffers.find((offer) => offer.id === id);
  if (!detailedOffer) {
    return (<Navigate to={AppRoutes.NotFound}/>);
  }
  dispatch(setCurrentCity({city: detailedOffer.city.name}));
  dispatch(setCurrentOffer({id}));
  const otherPlaces = detailedOffers.filter((offer) => offer.id !== id && offer.city.name === detailedOffer?.city.name);
  return (
    <main className="page__main page__main--offer">
      <section className="offer">
        <OfferGallery images={detailedOffer.images}/>
        <OfferAbout offer={detailedOffer}/>
        <Map
          points={otherPlaces.map((offer) => offer.location)}
          className={'offer__map'}
          isHoverActive={false}
        />
      </section>
      <div className="container">
        <section className={cn('near-places places', {'visually-hidden': otherPlaces.length === 0})}>
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {otherPlaces.map((offer) => (<OfferCard key={offer.id} offer={offer}/>))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default OfferMain;
