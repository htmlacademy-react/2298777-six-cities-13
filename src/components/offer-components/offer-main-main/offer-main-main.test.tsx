import { describe } from 'vitest';
import { withHistory, withStore } from '../../../util/mock-components';
import { render, screen } from '@testing-library/react';
import { getAuthStatus } from '../../../store/slices/user-data/selectors';
import { generateComments, generateDetailOffer, generateOfferCards } from '../../../util/mock';
import { getCityDetailed, getCurrentCityOffersLength, getPoints, getSelectedPoint } from '../../../store/slices/offers-data/selectors';
import OfferMainMain from './offer-main-main';
import { getCurrentOffer } from '../../../store/slices/offer-data/selectors';
import { getComments } from '../../../store/slices/comments-data/selectors';

vi.mock('../../../hooks/use-store');

describe('Component: offer main main', () => {
  it('should render correctly', async () => {
    const mockStore = await import('../../../hooks/use-store');
    const offer = generateDetailOffer();
    const offers = generateOfferCards();
    mockStore.useAppSelector = vi.fn((selectors) => {
      switch (selectors) {
        case getAuthStatus:
          return 'AUTH';
        case getCurrentCityOffersLength:
          return 200;
        case getCurrentOffer:
          return offer;
        case getPoints:
          return offers.map((o) => o.location);
        case getSelectedPoint:
          return offers[0].location;
        case getCityDetailed:
          return offer.city;
        case getComments:
          return generateComments();
      }
    });
    const component = withStore(withHistory(<OfferMainMain/>)).withStoreComponent;

    render(component);

    expect(screen.getByTestId('offer-main-main')).toBeInTheDocument();
  });
});
