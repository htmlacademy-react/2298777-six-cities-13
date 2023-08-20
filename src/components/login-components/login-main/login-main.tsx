import LoginForm from '../login-form/login-form';
import { FC } from 'react';
import LoginLocation from '../login-location/login-location';

const LoginMain : FC = () => (
  <main className="page__main page__main--login" data-testid='main-login'>
    <div className="page__login-container container">
      <LoginForm/>
      <LoginLocation/>
    </div>
  </main>
);

export default LoginMain;
