import { Navigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../../components/header/header-container';
import OfferMain from '../../components/offer-components/offer-main';
import { AppRoutes } from '../../const';
import { FC } from 'react';

const OfferPage : FC = () => {
  const id = useParams().id;
  if (id === undefined) {
    return (<Navigate to={AppRoutes.NotFound}/>);
  }
  return (
    <div className="page">
      <Helmet>
        <title>6 cities - Offer</title>
      </Helmet>
      <HeaderContainer isNavShown/>

      <OfferMain id={id}/>
    </div>);
};

export default OfferPage;
