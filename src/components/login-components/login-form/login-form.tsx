import LoginInput from '../login-input';
import { LoginData } from '../../../const';
import { FC, useState } from 'react';
import { useAppDispatch } from '../../../hooks/use-store';
import { loginAction } from '../../../store/api-action';
import processErrorHandle from '../../../services/process-error-handle';
import passwordSchema from './password-schema';

const LoginForm : FC = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({email: '', password: ''});
  const [disabled, setDisabled] = useState(false);
  return (
    <section className="login">
      <h1 className="login__title">Sign in</h1>
      <form className="login__form form" method="post" onSubmit={(evt) => {
        evt.preventDefault();
        const errorList = passwordSchema.validate(formData.password, {details: true}) as {message: string}[];
        if (errorList.length === 0) {
          setDisabled(true);
          dispatch(loginAction(formData))
            .then((data) => {
              if (data.meta.requestStatus === 'rejected') {
                processErrorHandle('wrong password or email');
              }
            })
            .finally(() => setDisabled(false));
        } else {
          processErrorHandle(errorList[0].message);
        }
      }}
      >
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