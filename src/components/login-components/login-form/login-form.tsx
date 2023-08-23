import LoginInput from '../login-input/login-input';
import { LoginData } from '../../../const';
import { FC, useRef, useState } from 'react';
import useFormSubmit from '../../../hooks/use-form-submit';

const LoginForm : FC = () => {
  const [formData, setFormData] = useState({email: '', password: ''});
  const [disabled, setDisabled] = useState(false);
  const formRef = useRef(null);
  useFormSubmit(formRef, formData, setDisabled);
  return (
    <section className="login">
      <h1 className="login__title">Sign in</h1>
      <form className="login__form form" method="post" ref={formRef}>
        {Object.values(LoginData).map((item) => (
          <LoginInput
            key={item}
            label={item}
            onFormDataChange={(data: string) => setFormData({
              ...formData,
              [item]: data,
            })}
          />
        ))}
        <button disabled={disabled} className="login__submit form__submit button" type="submit">Sign in</button>
      </form>
    </section>
  );
};

export default LoginForm;
