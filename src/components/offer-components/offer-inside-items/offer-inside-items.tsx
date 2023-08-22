import { FC } from 'react';

type OfferInsideItemsProps = {
  goods: string[];
}

const OfferInsideItems : FC<OfferInsideItemsProps> = ({goods}) => (
  <ul className="offer__inside-list" data-testid='offer-inside-item'>
    {goods.map((good) =>
      (<li className="offer__inside-item" key={good}>{good}</li>)
    )}
  </ul>
);

export default OfferInsideItems;
