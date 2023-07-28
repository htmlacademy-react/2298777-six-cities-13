import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import store from './store';
import { checkAuthAction, fetchFavoritesAction, fetchOffersAction } from './store/api-action';
import { Provider } from 'react-redux';

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction());
store.dispatch(fetchFavoritesAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);
