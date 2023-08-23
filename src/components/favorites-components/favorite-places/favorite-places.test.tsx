import { describe } from 'vitest';
import { generateOfferCards } from '../../../util/mock';
import { withHistory, withStore } from '../../../util/mock-components';
import FavoritePlaces from './favorite-places';
import { render, screen } from '@testing-library/react';

vi.mock('../../../hooks/use-store');

describe('Component: favorite places', () => {
  it('should render properly', async () => {
    const mockFavorites = generateOfferCards();
    const mockSelector = await import('../../../hooks/use-store');
    mockSelector.useAppSelector = vi.fn(() => 'AUTH');

    const component = withStore(withHistory(<FavoritePlaces favoriteOffers={mockFavorites} city='Amsterdam'/>)).withStoreComponent;
    render(component);

    expect(screen.getByTestId('favorites-places')).toBeInTheDocument();
  });
});
