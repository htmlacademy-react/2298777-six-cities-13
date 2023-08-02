import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../../components/header/header-container';
import OfferMain from '../../components/offer-components/offer-main';
import { AppRoutes } from '../../const';
import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/use-store';
import Loading from '../../components/other/loading/loading';
import { fetchCurrentOfferAction, fetchNearByPlacesAction, fetchCommentsAction } from '../../store/api-action';

const OfferPage : FC = () => {
  const dispatch = useAppDispatch();
  const id = useParams().id;
  const navigate = useNavigate();
  const isLoading = useAppSelector((state) => state.isCurrentOfferLoading);
  const city = useAppSelector((state) => state.currentCity);

  if (id === undefined) {
    navigate(AppRoutes.NotFound);
  }

  useEffect(() => {
    if (id && !isLoading) {
      dispatch(fetchCurrentOfferAction(id));
      dispatch(fetchCommentsAction(id));
    }
  }, [id]);

  useEffect(() => {
    if (city && id && !isLoading) {
      dispatch(fetchNearByPlacesAction(id));
    }
  }, [city]);

  if (isLoading) {
    return <Loading/>;
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
