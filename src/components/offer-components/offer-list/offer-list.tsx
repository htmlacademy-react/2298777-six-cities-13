import OfferCard from '../offer-card/offer-card';
import { Offers } from '../../../types';

type OfferListProps = {
  offers: Offers;
}

function OfferList({offers} : OfferListProps) : JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (<OfferCard key={offer.id} offer={offer}/>))}
    </div>
  );
}

export default OfferList;