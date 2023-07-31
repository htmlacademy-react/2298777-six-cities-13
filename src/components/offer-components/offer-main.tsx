import { FC } from 'react';
import { useAppSelector } from '../../hooks/use-store';
import Loading from '../other/loading/loading';
import OfferOtherPlaces from './offer-other-places';
import OfferInfo from './offer-main-main';

const OfferMain : FC = () => {
  const loading = useAppSelector((state) => state.isCurrentOfferLoading);

  if (loading) {
    return <Loading/>;
  }

  return (
    <main className="page__main page__main--offer">
      <OfferInfo/>
      <OfferOtherPlaces/>
    </main>
  );
};

export default OfferMain;
