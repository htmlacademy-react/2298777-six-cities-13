import { describe } from 'vitest';
import { withHistory, withStore } from '../../util/mock-components';
import { render, screen } from '@testing-library/react';
import { getCityDetailed, getCurrentCity, getCurrentCityOffersLength, getCurrentSort, getIsOffersLoading, getOffersError, getPoints, getSelectedPoint } from '../../store/slices/offers-data/selectors';
import { generateOfferCards } from '../../util/mock';
import { getAuthStatus } from '../../store/slices/user-data/selectors';
import MainPage from './main';

vi.mock('../../hooks/use-store');

describe('Component: main page', () => {
  it('should render properly when no error', async () => {
    const mockStore = await import('../../hooks/use-store');
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
        case getOffersError:
          return null;
        case getIsOffersLoading:
          return false;
        default:
          return mockOffers[0];
      }
    });
    const component = withStore(withHistory(<MainPage/>)).withStoreComponent;

    render(component);

    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });

  it('should render properly when error', async () => {
    const mockStore = await import('../../hooks/use-store');
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
        case getOffersError:
          return 'main error';
        case getIsOffersLoading:
          return false;
        default:
          return mockOffers[0];
      }
    });
    const component = withStore(withHistory(<MainPage/>)).withStoreComponent;

    render(component);

    expect(screen.getByText('main error')).toBeInTheDocument();
  });
});
