import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Settings } from './const';
import users from './mocks/users';
import offers from './mocks/offers';
import detailedOffers from './mocks/detailedOffers';
import comments from './mocks/comments';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      numberOfOfferCards={Settings.NumberOfOfferCards}
      offers={offers}
      detailedOffers={detailedOffers}
      comments={comments}
      users={users}
    />
  </React.StrictMode>
);
