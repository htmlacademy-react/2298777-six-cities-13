import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const';
import { FC } from 'react';
import { createRoute } from '../../util';

type OfferLinkProps = {
  offerId: string;
}

const OfferLink : FC<PropsWithChildren<OfferLinkProps>> = ({offerId, children}) =>(
  <Link to={createRoute(AppRoutes.Offer, offerId)}>{children}</Link>
);

export default OfferLink;
