import { FC, PropsWithChildren } from 'react';
import { useAppDispatch } from '../../hooks/use-store';
import { checkAuthAction } from '../../store/api-actions/user';
import { fetchOffersAction } from '../../store/api-actions/offer';
import { fetchFavoritesAction } from '../../store/api-actions/favorite';

const StartFetch : FC<PropsWithChildren> = ({children}) => {
  const dispatch = useAppDispatch();
  dispatch(checkAuthAction()).then((data) => {
    if (data.meta.requestStatus === 'fulfilled') {
      dispatch(fetchFavoritesAction());
    }
  });
  dispatch(fetchOffersAction());

  return children;
};

export default StartFetch;
