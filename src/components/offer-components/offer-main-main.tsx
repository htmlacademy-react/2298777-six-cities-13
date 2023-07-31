import { FC } from 'react';
import OfferAbout from './offer-about';
import OfferGallery from './offer-gallery';
import Map from '../other/map';

const OfferInfo : FC = () => (
  <section className="offer">
    <OfferGallery/>
    <OfferAbout/>
    <Map
      className={'offer__map'}
      isHoverActive={false}
    />
  </section>
);


export default OfferInfo;
