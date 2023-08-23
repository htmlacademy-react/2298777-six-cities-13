import { describe } from 'vitest';
import { withStore, withHistory } from '../../../util/mock-components';
import FavoriteList from './favorite-list';
import { render, screen } from '@testing-library/react';
import { generateOfferCards } from '../../../util/mock';
import { getAuthStatus } from '../../../store/slices/user-data/selectors';
import { getFavorites } from '../../../store/slices/favorite-data/selectors';

vi.mock('../../../hooks/use-store');

describe('Component: favorite-list', () => {

  it('should render properly', async () => {
    const mockFavorites = generateOfferCards();
    const mockSelector = (await import('../../../hooks/use-store'));
    mockSelector.useAppSelector = vi.fn((selector) => {
      if (selector === getAuthStatus) {
        return 'AUTH';
      }
      if (selector === getFavorites) {
        return mockFavorites;
      }
      return null;
    });
    const component = withStore(withHistory(<FavoriteList/>)).withStoreComponent;
    render(component);

    expect(screen.getByTestId('favorite-list')).toBeInTheDocument();
  });
});
