import { State } from '../types/store';
import createAPI from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { configureMockStore, MockStore } from '@jedmao/redux-mock-store';
import { Action } from 'redux';
import { AppThunkDispatch } from './mock';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

type ComponentWithMockStore = {
  withStoreComponent: JSX.Element;
  mockStore: MockStore;
  mockAxiosAdapter: MockAdapter;
}

export const withStore = (children: JSX.Element, initialState: Partial<State> = {})
: ComponentWithMockStore => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  const mockStore = mockStoreCreator(initialState);

  return ({
    withStoreComponent: <Provider store={mockStore}>{children}</Provider>,
    mockStore,
    mockAxiosAdapter,
  });
};

export const withHistory = (children: JSX.Element) => (
  <MemoryRouter>
    <HelmetProvider>
      {children}
    </HelmetProvider>
  </MemoryRouter>
);
