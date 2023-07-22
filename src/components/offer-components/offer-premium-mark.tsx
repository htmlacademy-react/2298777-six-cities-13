import { FC } from 'react';
import cn from 'classnames';

type OfferPremiumMarkProps = {
  isPremium : boolean;
  isOfferMark? : boolean;
};

const OfferPremiumMark : FC<OfferPremiumMarkProps> = ({isPremium, isOfferMark = false}) => (
  <div className={cn({'place-card__mark': !isOfferMark}, {'offer__mark': isOfferMark}, {'visually-hidden': !isPremium})}>
    <span>Premium</span>
  </div>
);

export default OfferPremiumMark;
