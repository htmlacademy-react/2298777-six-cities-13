import { FC } from 'react';

const SignoutLink : FC = () => (
  <li className="header__nav-item">
    <a className="header__nav-link" href="#">
      <span className="header__signout">Sign out</span>
    </a>
  </li>
);

export default SignoutLink;
