import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../../components/header/header-container';
import MainMain from '../../components/main-components/main-main';
import MainEmpty from '../../components/main-components/main-empty';
import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/use-store';
import { fetchFavoritesAction } from '../../store/api-actions/favorite';
import { fetchOffersAction } from '../../store/api-actions/offer';
import { checkAuthAction } from '../../store/api-actions/user';
import CheckError from '../../components/other/check-error';


const MainPage : FC = () => {
  const isOffersLoading = useAppSelector((state) => state.offersData.isOffersLoading);
  const error = useAppSelector((state) => state.offersData.error);
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
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <HeaderContainer isNavShown/>

      <MainEmpty/>
      <MainMain/>
    </div>);
};


export default MainPage;
