import LoginInput from './login-input';
import { LoginData } from '../../const';

function LoginForm() : JSX.Element {
  return (
    <form className="login__form form" action="#" method="post">
      <LoginInput label={LoginData.email}/>
      <LoginInput label={LoginData.password}/>
      <button className="login__submit form__submit button" type="submit">Sign in</button>
    </form>
  );
}

export default LoginForm;
