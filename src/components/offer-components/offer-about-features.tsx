import { FC } from 'react';
import { DetailedOffer } from '../../types';

const OfferAboutFeatures : FC<{offer : DetailedOffer}> = ({offer}) => (
  <ul className="offer__features">
    <li className="offer__feature offer__feature--entire">
      {offer.type}
    </li>
    <li className="offer__feature offer__feature--bedrooms">
      {offer.bedrooms} Bedrooms
    </li>
    <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} adults
    </li>
  </ul>
);

export default OfferAboutFeatures;
