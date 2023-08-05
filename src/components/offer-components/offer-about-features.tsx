import { FC } from 'react';

type OfferAboutFeaturesProps = {
  type: string;
  bedrooms: number;
  maxAdults: number;
}

const OfferAboutFeatures : FC<OfferAboutFeaturesProps> = ({type, bedrooms, maxAdults}) => (
  <ul className="offer__features">
    <li className="offer__feature offer__feature--entire">
      {type}
    </li>
    <li className="offer__feature offer__feature--bedrooms">
      {bedrooms} Bedrooms
    </li>
    <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adults
    </li>
  </ul>
);

export default OfferAboutFeatures;
