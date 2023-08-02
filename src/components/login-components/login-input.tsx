import { capitalizeFirstLetter } from '../../util';
import { LoginData } from '../../const';
import { FC } from 'react';

type LoginInputProps = {
  label: string;
  onFormDataChange: (data : string) => void;
}

const LoginInput : FC<LoginInputProps> = ({label, onFormDataChange}) => (
  <div className="login__input-wrapper form__input-wrapper">
    <label className="visually-hidden">{label === LoginData.email ? 'E-mail' : capitalizeFirstLetter(label)}</label>
    <input
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
