import { describe } from 'vitest';
import { generateOfferCards, generateUser } from '../../../util/mock';
import { getUserData } from '../../../store/slices/user-data/selectors';
import { getFavorites } from '../../../store/slices/favorite-data/selectors';
import { withHistory, withStore } from '../../../util/mock-components';
import ProfileNavLink from './profile-nav-link';
import { render, screen } from '@testing-library/react';

vi.mock('../../../hooks/use-store');

describe('Component: profile nav link', () => {
  it('should render properly', async () => {
    const mockUser = generateUser();
    const mockFavorites = generateOfferCards();
    const mockStore = await import('../../../hooks/use-store');
    mockStore.useAppSelector = vi.fn((selector) => {
      switch (selector) {
        case getUserData:
          return mockUser;
        case getFavorites:
          return mockFavorites;
      }
    });

    const component = withStore(withHistory(<ProfileNavLink/>)).withStoreComponent;

    render(component);

    expect(screen.getByTestId('profile-link')).toBeInTheDocument();
    expect(screen.getByText(mockUser.email)).toBeInTheDocument();
    expect(screen.getByText(mockFavorites.length)).toBeInTheDocument();
  });
});
