import { FC } from 'react';
import OfferInsideItems from '../offer-inside-items/offer-inside-items';

const OfferAboutInside : FC<{goods : string[]}> = ({goods}) => (
  <div className="offer__inside" data-testid='offer-inside'>
    <h2 className="offer__inside-title">What&apos;s inside</h2>
    <OfferInsideItems goods={goods}/>
  </div>
);

export default OfferAboutInside;
