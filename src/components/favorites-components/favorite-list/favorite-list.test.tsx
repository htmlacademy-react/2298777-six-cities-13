import { describe } from 'vitest';
import { withStore, withHistory } from '../../../util/mock-components';
import FavoriteList from './favorite-list';
import { render, screen } from '@testing-library/react';
import { generateOfferCards } from '../../../util/mock';

vi.mock('../../../hooks/use-store');
vi.mock('../../../store/slices/user-data/selectors');
vi.mock('../../../store/slices/favorite-data/selectors');

describe('Component: favorite-list', () => {

  it('should render properly', async () => {
    const mockFavorites = generateOfferCards();
    const mockSelector = (await import('../../../hooks/use-store'));
    const mockUserData = (await import('../../../store/slices/user-data/selectors')).getAuthStatus;
    const mockFavoriteData = (await import('../../../store/slices/favorite-data/selectors')).getFavorites;
    mockSelector.useAppSelector = vi.fn((selector) => {
      if (selector === mockUserData) {
        return 'AUTH';
      }
      if (selector === mockFavoriteData) {
        return mockFavorites;
      }
      return null;
    });
    const component = withStore(withHistory(<FavoriteList/>)).withStoreComponent;
    render(component);

    expect(screen.getByTestId('favorite-list')).toBeInTheDocument();
  });
});
