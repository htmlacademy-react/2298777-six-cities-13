import { useEffect } from 'react';
import { fetchCommentsAction } from '../store/api-actions/comment';
import { fetchCurrentOfferAction, fetchNearByPlacesAction } from '../store/api-actions/offer';
import { CityString } from '../types/app-type';
import store from '../store';

const useOfferPage = (city: CityString, isLoading: boolean, id: string | undefined) => {

  useEffect(() => {
    if (id && !isLoading) {
      store.dispatch(fetchCurrentOfferAction(id));
      store.dispatch(fetchCommentsAction(id));
    }
  }, [id]);

  useEffect(() => {
    if (city && id && !isLoading) {
      store.dispatch(fetchNearByPlacesAction(id));
    }
  }, [city]);

};

export default useOfferPage;
