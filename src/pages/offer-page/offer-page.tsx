import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../../components/header/header-conainer/header-container';
import OfferMain from '../../components/offer-components/offer-main/offer-main';
import { AppRoutes } from '../../const';
import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/use-store';
import { fetchCommentsAction } from '../../store/api-actions/comment';
import { fetchCurrentOfferAction, fetchNearByPlacesAction } from '../../store/api-actions/offer';
import useOfferPage from '../../hooks/use-offer-page';
import CheckError from '../../components/other/check-error';
import { getCurrentOfferError, getIsCurrentOfferLoading } from '../../store/slices/offer-data/selectors';
import { getCurrentCity } from '../../store/slices/offers-data/selectors';

const OfferPage : FC = () => {
  const dispatch = useAppDispatch();
  const id = useParams().id;
  const navigate = useNavigate();
  const error = useAppSelector(getCurrentOfferError);
  const isLoading = useAppSelector(getIsCurrentOfferLoading);
  const city = useAppSelector(getCurrentCity);
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
    <div className="page" data-testid='offer-page'>
      <Helmet>
        <title>6 cities - Offer</title>
      </Helmet>
      <HeaderContainer isNavShown/>

      <OfferMain/>
    </div>);
};

export default OfferPage;
