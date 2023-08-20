import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../../components/header/header-conainer/header-container';
import LoginMain from '../../components/login-components/login-main';
import { FC } from 'react';

const LoginPage : FC = () => (
  <div className="page page--gray page--login">
    <Helmet>
      <title>6 cities - Login</title>
    </Helmet>
    <HeaderContainer isNavShown={false}/>

    <LoginMain/>
  </div>
);

export default LoginPage;
