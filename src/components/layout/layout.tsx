import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from '../other/scroll-to-top';
import StartFetch from '../other/start-fetch';
import { Outlet } from 'react-router-dom';
import { FC } from 'react';

const Layout: FC = () => (
  <HelmetProvider>
    <StartFetch>
      <ScrollToTop>
        <Outlet/>
      </ScrollToTop>
    </StartFetch>
  </HelmetProvider>
);

export default Layout;
