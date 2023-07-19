import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AppRoutes } from '../../const';
import HeaderContainer from '../../components/header/header-container';
import { FC } from 'react';

const Page404 : FC = () => (
  <div className="page404">
    <Helmet>
      <title>6 cities - 404</title>
    </Helmet>
    <HeaderContainer isNavShown={false}/>

    <main className="page__main page__main--404">
      <div className="page__404-container container">
        <section className="page__404" style={{textAlign: 'center'}}>
          <h1 className="page__404-title">404. Page not found</h1>
          <Link className="page__404-link" to={AppRoutes.Main}>Go to main page</Link>
        </section>
      </div>
    </main>
  </div>);


export default Page404;
