import { FC } from 'react';
import OfferAbout from '../offer-about/offer-about';
import OfferGallery from '../offer-gallery/offer-gallery';
import Map from '../../other/map';

const OfferMainMain : FC = () => (
  <section className="offer" data-testid='offer-main-main'>
    <OfferGallery/>
    <OfferAbout/>
    <Map
      className={'offer__map'}
      isHoverActive={false}
    />
  </section>
);


export default OfferMainMain;
