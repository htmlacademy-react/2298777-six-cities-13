import { Navigate, useParams } from 'react-router-dom';
import { Comments, DetailedOffers } from '../../types/app-type';
import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../../components/header/header-container';
import OfferMain from '../../components/offer-components/offer-main';
import { AppRoutes } from '../../const';
import { FC } from 'react';

type OfferPageParams = {
  detailedOffers: DetailedOffers;
  comments: Comments;
}

const OfferPage : FC<OfferPageParams> = ({detailedOffers, comments}) => {
  const id = useParams().id;
  if (id === undefined) {
    return (<Navigate to={AppRoutes.NotFound}/>);
  }
  return (
    <div className="page">
      <Helmet>
        <title>6 cities - Offer</title>
      </Helmet>
      <HeaderContainer isNavShown city={detailedOffers.find((offer) => offer.id === id)?.city.name}/>

      <OfferMain detailedOffers={detailedOffers} id={id} comments={comments}/>
    </div>);
};

export default OfferPage;
