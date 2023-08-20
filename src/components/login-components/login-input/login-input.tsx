import { capitalizeFirstLetter } from '../../../util/util';
import { LoginData } from '../../../const';
import { FC } from 'react';

type LoginInputProps = {
  label: string;
  onFormDataChange: (data : string) => void;
}

const LoginInput : FC<LoginInputProps> = ({label, onFormDataChange}) => (
  <div className="login__input-wrapper form__input-wrapper">
    <label className="visually-hidden" htmlFor={label}>
      {label === LoginData.email ? 'E-mail' : capitalizeFirstLetter(label)}
    </label>
    <input
      id={label}
      className="login__input form__input"
      type={label}
      name={label}
      placeholder={capitalizeFirstLetter(label)}
      required
      onChange={(evt) => onFormDataChange(evt.target.value)}
    />
  </div>
);


export default LoginInput;
