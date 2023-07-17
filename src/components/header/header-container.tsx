import Logo from '../other/logo';
import NavContainer from './nav-container';

type HeaderContainerProps = {
  isNavShown: boolean;
}

function HeaderContainer({isNavShown} : HeaderContainerProps) : JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo/>
          </div>
          {isNavShown && <NavContainer/>}
        </div>
      </div>
    </header>
  );
}

export default HeaderContainer;
