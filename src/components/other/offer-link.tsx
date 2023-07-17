import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const';

type OfferLinkProps = {
  offerId: string;
}

function OfferLink({offerId, children} : PropsWithChildren<OfferLinkProps>) : JSX.Element {
  return (
    <Link to={`${AppRoutes.Offer}/${offerId}`}>{children}</Link>
  );
}

export default OfferLink;
