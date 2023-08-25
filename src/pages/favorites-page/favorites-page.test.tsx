import { describe } from 'vitest';
import { withStore, withHistory } from '../../util/mock-components';
import FavoritesPage from './favorites-page';
import { render, screen } from '@testing-library/react';
import { generateOfferCards } from '../../util/mock';
import { getAuthStatus } from '../../store/slices/user-data/selectors';
import { getFavorites, getFavoritesError, getIsFavoritesLoading } from '../../store/slices/favorite-data/selectors';
import userEvent from '@testing-library/user-event';
import * as mockFetchFavorites from '../../store/api-actions/favorite';

vi.mock('../../hooks/use-store');
vi.mock('../../store/api-actions/favorite');


describe('Component: favorite-list', () => {

  it('should render page when no error or not loading', async () => {
    const mockFavorites = generateOfferCards();
    const mockSelector = (await import('../../hooks/use-store'));
    mockSelector.useAppSelector = vi.fn((selector) => {
      switch (selector) {
        case getAuthStatus:
          return 'AUTH';
        case getFavorites:
          return mockFavorites;
        case getIsFavoritesLoading:
          return false;
        case getFavoritesError:
          return null;
      }
    });
    const component = withStore(withHistory(<FavoritesPage/>)).withStoreComponent;
    render(component);

    expect(screen.getByTestId('favorites-page')).toBeInTheDocument();
  });

  it('should render error component when there is error', async () => {
    const mockFavorites = generateOfferCards();
    const mockSelector = (await import('../../hooks/use-store'));
    mockSelector.useAppSelector = vi.fn((selector) => {
      switch (selector) {
        case getAuthStatus:
          return 'AUTH';
        case getFavorites:
          return mockFavorites;
        case getIsFavoritesLoading:
          return false;
        case getFavoritesError:
          return 'pog pog';
      }
    });

    const component = withStore(withHistory(<FavoritesPage/>)).withStoreComponent;
    render(component);

    expect(screen.getByText('pog pog')).toBeInTheDocument();
  });

  it('should dispatch checkAuthAction and fetchFavoritesAction when click onTryAgain', async () => {
    const mockFavorites = generateOfferCards();
    const mockStore = (await import('../../hooks/use-store'));
    const spyFetch = vi.spyOn(mockFetchFavorites, 'fetchFavoritesAction');
    mockStore.useAppSelector = vi.fn((selector) => {
      switch (selector) {
        case getAuthStatus:
          return 'AUTH';
        case getFavorites:
          return mockFavorites;
        case getIsFavoritesLoading:
          return false;
        case getFavoritesError:
          return 'pog pog';
      }
    });

    const component = withStore(withHistory(<FavoritesPage/>)).withStoreComponent;
    render(component);

    expect(spyFetch).toBeCalledTimes(0);

    await userEvent.click(screen.getByRole('button'));

    expect(spyFetch).toBeCalledTimes(1);
  });
});
