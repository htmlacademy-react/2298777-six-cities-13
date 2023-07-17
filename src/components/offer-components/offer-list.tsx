import OfferCard from './offer-card';
import { Offers } from '../../types';

type OfferListProps = {
  offers: Offers;
  onOfferHover?: (id : string) => void;
}

function OfferList({offers, onOfferHover} : OfferListProps) : JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (<OfferCard key={offer.id} offer={offer} onOfferHover={onOfferHover}/>))}
    </div>
  );
}

export default OfferList;
