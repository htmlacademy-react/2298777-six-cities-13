import { Navigate, useParams } from 'react-router-dom';
import { Comments, DetailedOffers } from '../../types';
import OfferCard from '../../components/offer-components/offer-card';
import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../../components/header/header-container';
import OfferMain from '../../components/offer-components/offer-main';

type OfferPageParams = {
  detailedOffers: DetailedOffers;
  comments: Comments;
}

function OfferPage({detailedOffers, comments} : OfferPageParams) : JSX.Element {
  const id = useParams().id;
  const detailedOffer = detailedOffers.find((offer) => offer.id === id);
  const otherPlaces = detailedOffers.filter((offer) => offer.id !== id && offer.city.name === detailedOffer?.city.name).map((offer) => (<OfferCard key={offer.id} offer={offer}/>));
  if (detailedOffer === undefined) {
    return (<Navigate to="/404"/>);
  }
  return (
    <div className="page">
      <Helmet>
        <title>6 cities - Offer</title>
      </Helmet>
      <HeaderContainer isNavShown/>

      <OfferMain detailedOffer={detailedOffer} comments={comments} otherPlaces={otherPlaces}/>
    </div>);
}

export default OfferPage;
