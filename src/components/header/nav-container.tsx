import ProfileNavLink from './profile-nav-link';
import SignoutLink from './signout-link';

function NavContainer() : JSX.Element {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <ProfileNavLink/>
        <SignoutLink/>
      </ul>
    </nav>
  );
}

export default NavContainer;
