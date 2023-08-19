import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { withStore } from '../../util/mock-components';
import { generateUser, makeFakeStore } from '../../util/mock';
import { AppRoutes } from '../../const';
import { createRoute } from '../../util/util';
import mockRouteConfig from '../../util/mock-route-config';

describe('app component', () => {
  let router : ReturnType<typeof createMemoryRouter>;

  beforeEach(() => {
    router = createMemoryRouter(mockRouteConfig);
  });

  it('should render main page on default', () => {
    const component = withStore(<RouterProvider router={router}/>, makeFakeStore()).withStoreComponent;
    render(component);

    expect(screen.getByText('main-page')).toBeInTheDocument();
  });

  it('should render login page when navigate to login', () => {
    const component = withStore(<RouterProvider router={router}/>, makeFakeStore({
      userData: {
        authStatus: 'NO_AUTH',
        user: null,
      },
    })).withStoreComponent;
    router.navigate(AppRoutes.Login);
    render(component);

    expect(screen.getByText('login-page')).toBeInTheDocument();
  });

  it('should render favorites page when navigate to favorites', () => {
    const component = withStore(<RouterProvider router={router}/>, makeFakeStore({
      userData: {
        authStatus: 'AUTH',
        user: generateUser(),
      },
    })).withStoreComponent;
    router.navigate(AppRoutes.Favorites);
    render(component);

    expect(screen.getByText('favorites-page')).toBeInTheDocument();
  });

  it('should render offer page when navigate to offer', () => {
    const store = makeFakeStore();
    const component = withStore(<RouterProvider router={router}/>, store).withStoreComponent;
    router.navigate(createRoute(AppRoutes.Offer, store.offerData.currentOffer!.id));
    render(component);

    expect(screen.getByText('offer-page')).toBeInTheDocument();
  });

  it('should render page404 when incorrect path', () => {
    const component = withStore(<RouterProvider router={router}/>, makeFakeStore()).withStoreComponent;
    router.navigate('1231');
    render(component);

    expect(screen.getByText('page-404')).toBeInTheDocument();
  });
});
