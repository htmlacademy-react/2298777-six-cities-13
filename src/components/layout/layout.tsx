import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from '../other/scroll-to-top';
import { Outlet } from 'react-router-dom';
import { FC } from 'react';

const Layout: FC = () => (
  <HelmetProvider>
    <ScrollToTop>
      <Outlet/>
    </ScrollToTop>
  </HelmetProvider>
);

export default Layout;
