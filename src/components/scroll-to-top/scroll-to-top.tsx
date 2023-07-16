import { PropsWithChildren, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop({children} : PropsWithChildren) : JSX.Element{
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (<div>{children}</div>);
}

export default ScrollToTop;
