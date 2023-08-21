import { describe } from 'vitest';
import { withHistory, withStore } from '../../../util/mock-components';
import { render, screen } from '@testing-library/react';
import MainPlacesFound from './main-places-found';
import { getCurrentCity, getCurrentCityOffersLength } from '../../../store/slices/offers-data/selectors';

vi.mock('../../../hooks/use-store');

describe('Component: main places found', () => {
  it('should render properly', async () => {
    const mockStore = await import('../../../hooks/use-store');
    mockStore.useAppSelector = vi.fn((selector) => {
      switch (selector) {
        case getCurrentCityOffersLength:
          return 10;
        case getCurrentCity:
          return 'Amsterdam';
      }
    });
    const component = withStore(withHistory(<MainPlacesFound/>)).withStoreComponent;

    render(component);

    expect(screen.getByText('10 places to stay in Amsterdam')).toBeInTheDocument();
  });
});
