import { useAppSelector } from '../../hooks/use-store';
import OfferCard from './offer-card';
import { FC } from 'react';


const OfferList : FC<{isFavoriteButtonDisabled : boolean}> = ({isFavoriteButtonDisabled}) => {
  const offers = useAppSelector((state) => state.offersData.currentCityOffers);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (<OfferCard key={offer.id} offer={offer} isFavoriteButtonDisabled={isFavoriteButtonDisabled}/>))}
    </div>
  );
};

export default OfferList;
