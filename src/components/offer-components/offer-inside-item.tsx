import { FC } from 'react';

type OfferInsideItemProps = {
  item: string;
}

const OfferInsideItem : FC<OfferInsideItemProps> = ({item}) => (
  <li className="offer__inside-item">
    {item}
  </li>
);

export default OfferInsideItem;
