import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../../components/header/header-conainer/header-container';
import MainMain from '../../components/main-components/main-main/main-main';
import MainEmpty from '../../components/main-components/main-empty/main-empty';
import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/use-store';
import { fetchFavoritesAction } from '../../store/api-actions/favorite';
import { fetchOffersAction } from '../../store/api-actions/offer';
import { checkAuthAction } from '../../store/api-actions/user';
import CheckError from '../../components/other/check-error';
import { getIsOffersLoading, getOffersError } from '../../store/slices/offers-data/selectors';


const MainPage : FC = () => {
  const isOffersLoading = useAppSelector(getIsOffersLoading);
  const error = useAppSelector(getOffersError);
  const dispatch = useAppDispatch();

  const onTryAgain = () => {
    dispatch(checkAuthAction());
    dispatch(fetchOffersAction());
    dispatch(fetchFavoritesAction());
  };

  if (error || isOffersLoading) {
    return <CheckError isLoading={isOffersLoading} error={error} onTryAgain={onTryAgain}/>;
  }

  return (
    <div className="page page--gray page--main" data-testid='main-page'>
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <HeaderContainer isNavShown/>

      <MainEmpty/>
      <MainMain/>
    </div>);
};


export default MainPage;
