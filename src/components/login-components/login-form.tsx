import LoginInput from './login-input';
import { LoginData } from '../../const';
import { FC } from 'react';

const LoginForm : FC = () => (
  <form className="login__form form" action="#" method="post">
    {Object.values(LoginData).map((item) => (<LoginInput key={item} label={item}/>))}
    <button className="login__submit form__submit button" type="submit">Sign in</button>
  </form>
);

export default LoginForm;
