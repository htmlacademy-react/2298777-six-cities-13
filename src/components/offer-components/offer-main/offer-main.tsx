import { FC } from 'react';
import { useAppSelector } from '../../../hooks/use-store';
import Loading from '../../other/loading/loading';
import OfferOtherPlaces from '../offer-other-places/offer-other-places';
import OfferMainMain from '../offer-main-main/offer-main-main';
import { getIsCurrentOfferLoading } from '../../../store/slices/offer-data/selectors';

const OfferMain : FC = () => {
  const loading = useAppSelector(getIsCurrentOfferLoading);

  if (loading) {
    return <Loading/>;
  }

  return (
    <main className="page__main page__main--offer" data-testid='offer-main'>
      <OfferMainMain/>
      <OfferOtherPlaces/>
    </main>
  );
};

export default OfferMain;
