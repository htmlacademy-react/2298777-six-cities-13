import { FC } from 'react';
import { capitalizeFirstLetter } from '../../../util/util';

type OfferAboutFeaturesProps = {
  type: string;
  bedrooms: number;
  maxAdults: number;
}

const OfferAboutFeatures : FC<OfferAboutFeaturesProps> = ({type, bedrooms, maxAdults}) => (
  <ul className="offer__features" data-testid='offer-features'>
    <li className="offer__feature offer__feature--entire">
      {capitalizeFirstLetter(type)}
    </li>
    <li className="offer__feature offer__feature--bedrooms">
      {bedrooms} {bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}
    </li>
    <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} {maxAdults === 1 ? 'adult' : 'adults'}
    </li>
  </ul>
);

export default OfferAboutFeatures;
