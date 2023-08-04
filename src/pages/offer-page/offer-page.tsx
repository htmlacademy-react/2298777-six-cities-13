import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../../components/header/header-container';
import OfferMain from '../../components/offer-components/offer-main';
import { AppRoutes } from '../../const';
import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/use-store';
import { fetchCommentsAction } from '../../store/api-actions/comment';
import { fetchCurrentOfferAction, fetchNearByPlacesAction } from '../../store/api-actions/offer';
import useOfferPage from '../../hooks/use-offer-page';
import CheckError from '../../components/other/check-error';

const OfferPage : FC = () => {
  const dispatch = useAppDispatch();
  const id = useParams().id;
  const navigate = useNavigate();
  const error = useAppSelector((state) => state.offerData.error);
  const isLoading = useAppSelector((state) => state.offerData.isCurrentOfferLoading);
  const city = useAppSelector((state) => state.offersData.currentCity);
  useOfferPage(city, isLoading, id);

  const onTryAgain = () => {
    if (id) {
      dispatch(fetchCurrentOfferAction(id));
      dispatch(fetchCommentsAction(id));
      dispatch(fetchNearByPlacesAction(id));
    }
  };

  if (id === undefined) {
    navigate(AppRoutes.NotFound);
  }

  if (error || isLoading) {
    return <CheckError isLoading={isLoading} error={error} onTryAgain={onTryAgain}/>;
  }

  return (
    <div className="page">
      <Helmet>
        <title>6 cities - Offer</title>
      </Helmet>
      <HeaderContainer isNavShown/>

      <OfferMain/>
    </div>);
};

export default OfferPage;
