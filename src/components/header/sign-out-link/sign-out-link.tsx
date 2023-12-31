import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../../const';
import { useAppDispatch } from '../../../hooks/use-store';
import { logoutAction } from '../../../store/api-actions/user';

const SignOutLink : FC = () => {
  const dispatch = useAppDispatch();
  return (
    <Link className="header__nav-link" to={AppRoutes.Main} onClick={(evt) => {
      evt.preventDefault();
      dispatch(logoutAction());
    }}
    >
      <span className="header__signout">Sign out</span>
    </Link>
  );
};

export default SignOutLink;
