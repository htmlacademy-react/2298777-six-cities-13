import { describe } from 'vitest';
import { withHistory, withStore } from '../../../util/mock-components';
import MainMain from './main-main';
import { render, screen } from '@testing-library/react';
import { getCityDetailed, getCurrentCity, getCurrentCityOffers, getCurrentCityOffersLength, getCurrentSort, getPoints, getSelectedPoint } from '../../../store/slices/offers-data/selectors';
import { generateDetailOffer, generateOfferCards } from '../../../util/mock';
import { getAuthStatus } from '../../../store/slices/user-data/selectors';
import { getNearByLocations } from '../../../store/slices/near-by-data/selectors';
import { getCurrentOffer } from '../../../store/slices/offer-data/selectors';

vi.mock('../../../hooks/use-store');

describe('Component: main main', () => {
  it('should render properly when currentCityOffersLength !== 0', async () => {
    const offers = generateOfferCards();
    const mockStore = await import('../../../hooks/use-store');
    mockStore.useAppSelector = vi.fn((selector) => {
      switch (selector) {
        case getCurrentCityOffersLength:
          return 1;
        case getCityDetailed:
          return offers[0].city;
        case getPoints:
          return offers.map((o) => o.location);
        case getSelectedPoint:
          return offers[0].location;
        case getCurrentCity:
          return 'Amsterdam';
        case getCurrentSort:
          return 'Popular';
        case getAuthStatus:
          return 'AUTH';
        case getNearByLocations:
          return offers.map((o) => o.location);
        case getCurrentOffer:
          return generateDetailOffer();
        case getCurrentCityOffers:
          return offers;
      }
    });
    const component = withStore(withHistory(<MainMain/>)).withStoreComponent;

    render(component);

    expect(screen.getByTestId('main-main')).toBeInTheDocument();
  });

  it('should render properly when currentCityOffersLength === 0', async () => {
    const offers = generateOfferCards();
    const mockStore = await import('../../../hooks/use-store');
    mockStore.useAppSelector = vi.fn((selector) => {
      switch (selector) {
        case getCurrentCityOffersLength:
          return 0;
        case getCityDetailed:
          return offers[0].city;
        case getPoints:
          return offers.map((o) => o.location);
        case getSelectedPoint:
          return offers[0].location;
        case getCurrentCity:
          return 'Amsterdam';
        case getCurrentSort:
          return 'Popular';
        case getAuthStatus:
          return 'AUTH';
      }
    });
    const component = withStore(withHistory(<MainMain/>)).withStoreComponent;

    render(component);

    expect(screen.queryByTestId('main-main')).not.toBeInTheDocument();
  });
});
