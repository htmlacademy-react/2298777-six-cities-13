import { Navigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../../components/header/header-container';
import OfferMain from '../../components/offer-components/offer-main';
import { AppRoutes } from '../../const';
import { FC } from 'react';
import { useAppSelector } from '../../hooks/use-store';
import Loading from '../../components/other/loading/loading';

const OfferPage : FC = () => {
  const id = useParams().id;
  const isLoading = useAppSelector((state) => state.currentOfferLoading);
  if (id === undefined) {
    return (<Navigate to={AppRoutes.NotFound}/>);
  }


  return (
    <div className="page">
      <Helmet>
        <title>6 cities - Offer</title>
      </Helmet>
      <HeaderContainer isNavShown/>

      {isLoading ? <Loading/> : <OfferMain/>}
    </div>);
};

export default OfferPage;
