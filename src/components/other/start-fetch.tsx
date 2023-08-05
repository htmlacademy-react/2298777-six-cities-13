import { FC, PropsWithChildren } from 'react';
import { useAppDispatch } from '../../hooks/use-store';
import { checkAuthAction } from '../../store/api-actions/user';
import { fetchFavoritesAction } from '../../store/api-actions/favorite';
import { fetchOffersAction } from '../../store/api-actions/offer';

const StartFetch : FC<PropsWithChildren> = ({children}) => {
  const dispatch = useAppDispatch();
  dispatch(checkAuthAction());
  dispatch(fetchOffersAction());
  dispatch(fetchFavoritesAction());

  return children;
};

export default StartFetch;
