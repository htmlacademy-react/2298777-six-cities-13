import { useEffect } from 'react';
import { fetchCommentsAction } from '../store/api-actions/comment';
import { fetchCurrentOfferAction, fetchNearByPlacesAction } from '../store/api-actions/offer';
import store from '../store';

const useOfferPage = (isLoading: boolean, id: string | undefined) => {

  useEffect(() => {
    if (id && !isLoading) {
      store.dispatch(fetchCurrentOfferAction(id));
      store.dispatch(fetchCommentsAction(id));
      store.dispatch(fetchNearByPlacesAction(id));
    }
  }, [id]);

};

export default useOfferPage;
