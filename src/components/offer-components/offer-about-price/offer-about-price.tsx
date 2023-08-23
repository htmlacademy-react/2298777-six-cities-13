import { FC } from 'react';

const OfferAboutPrice : FC<{price : number}> = ({price}) => (
  <div className="offer__price" data-testid='offer-price'>
    <b className="offer__price-value">&euro;{price}</b>
    <span className="offer__price-text">&nbsp;night</span>
  </div>
);

export default OfferAboutPrice;
