import { FC, PropsWithChildren } from 'react';
import { useAppDispatch } from '../../hooks/use-store';
import { checkAuthAction, fetchOffersAction, fetchFavoritesAction } from '../../store/api-action';

const StartFetch : FC<PropsWithChildren> = ({children}) => {
  const dispatch = useAppDispatch();
  dispatch(checkAuthAction());
  dispatch(fetchOffersAction());
  dispatch(fetchFavoritesAction());

  return children;
};

export default StartFetch;
