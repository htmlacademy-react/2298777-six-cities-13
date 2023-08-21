import { describe } from 'vitest';
import { withHistory, withStore } from '../../../util/mock-components';
import { render, screen } from '@testing-library/react';
import { getCityDetailed, getCurrentCity, getCurrentCityOffersLength, getCurrentSort, getPoints, getSelectedPoint } from '../../../store/slices/offers-data/selectors';
import { generateOfferCards } from '../../../util/mock';
import { getAuthStatus } from '../../../store/slices/user-data/selectors';
import MainPlaces from './main-places';

vi.mock('../../../hooks/use-store');

describe('Component: main places', () => {
  it('should render properly', async () => {
    const mockStore = await import('../../../hooks/use-store');
    const mockOffers = generateOfferCards();
    mockStore.useAppSelector = vi.fn((selector) => {
      switch (selector) {
        case getCurrentCityOffersLength:
          return 0;
        case getCityDetailed:
          return mockOffers[0].city;
        case getPoints:
          return mockOffers.map((o) => o.location);
        case getSelectedPoint:
          return mockOffers[0].location;
        case getCurrentCity:
          return 'Amsterdam';
        case getCurrentSort:
          return 'Popular';
        case getAuthStatus:
          return 'AUTH';
        default:
          return mockOffers[0];
      }
    });
    const component = withStore(withHistory(<MainPlaces/>)).withStoreComponent;

    render(component);

    expect(screen.getByText('Places')).toBeInTheDocument();
    expect(screen.getByTestId('main-places')).toBeInTheDocument();
  });
});
