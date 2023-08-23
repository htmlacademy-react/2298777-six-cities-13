import { describe } from 'vitest';
import { withHistory, withStore } from '../../../util/mock-components';
import { render, screen } from '@testing-library/react';
import MainOffers from './main-offers';
import { getCityDetailed, getCurrentCity, getCurrentCityOffers, getCurrentCityOffersLength, getCurrentSort, getPoints, getSelectedPoint } from '../../../store/slices/offers-data/selectors';
import { generateOfferCards } from '../../../util/mock';
import { getAuthStatus } from '../../../store/slices/user-data/selectors';

vi.mock('../../../hooks/use-store');

describe('Component: main offers', () => {
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
        case getCurrentCityOffers:
          return mockOffers;
      }
    });
    const component = withStore(withHistory(<MainOffers/>)).withStoreComponent;

    render(component);

    expect(screen.getByTestId('main-offers')).toBeInTheDocument();
  });
});
