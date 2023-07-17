import { capitalizeFirstLetter } from '../../util';
import { LoginData } from '../../const';

type LoginInputProps = {
  label: string;
}

function LoginInput({label} : LoginInputProps) : JSX.Element {
  return (
    <div className="login__input-wrapper form__input-wrapper">
      <label className="visually-hidden">{label === LoginData.email ? 'E-mail' : capitalizeFirstLetter(label)}</label>
      <input
        className="login__input form__input"
        type={label}
        name={label}
        placeholder={capitalizeFirstLetter(label)}
        required
      />
    </div>
  );
}

export default LoginInput;
