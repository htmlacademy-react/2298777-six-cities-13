import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const';
import { useAppDispatch } from '../../hooks/use-store';
import { removeToken } from '../../services/token';
import { logoutAction } from '../../store/api-action';

const SignOutLink : FC = () => {
  const dispatch = useAppDispatch();
  return (
    <Link className="header__nav-link" to={AppRoutes.Main} onClick={(evt) => {
      evt.preventDefault();
      dispatch(logoutAction());
      removeToken();
    }}
    >
      <span className="header__signout">Sign out</span>
    </Link>
  );
};

export default SignOutLink;
