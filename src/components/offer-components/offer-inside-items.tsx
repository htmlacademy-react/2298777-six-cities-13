import { FC } from 'react';

type OfferInsideItemsProps = {
  goods: string[];
}

const OfferInsideItems : FC<OfferInsideItemsProps> = ({goods}) => (
  <ul className="offer__inside-list">
    {goods.map((good) =>
      (<li className="offer__inside-item" key={good}>{good}</li>)
    )}
  </ul>
);

export default OfferInsideItems;
