import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const';
import { FC } from 'react';
import { createRoute } from '../../util';
import { useAppDispatch } from '../../hooks/use-store';
import { fetchCommentsAction, fetchCurrentOfferAction, fetchNearByPlacesAction } from '../../store/api-action';

type OfferLinkProps = {
  offerId: string;
}

const OfferLink : FC<PropsWithChildren<OfferLinkProps>> = ({offerId, children}) => {
  const dispatch = useAppDispatch();
  return (
    <Link to={createRoute(AppRoutes.Offer, offerId)} onClick={() => {
      dispatch(fetchCurrentOfferAction(offerId));
      dispatch(fetchNearByPlacesAction(offerId));
      dispatch(fetchCommentsAction(offerId));
    }}
    >{children}
    </Link>
  );
};

export default OfferLink;
