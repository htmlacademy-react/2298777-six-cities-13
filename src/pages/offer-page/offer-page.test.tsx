import { describe } from 'vitest';
import { withHistory, withStore } from '../../util/mock-components';
import { render, screen } from '@testing-library/react';
import { getAuthStatus } from '../../store/slices/user-data/selectors';
import { getComments, getCommentsLength } from '../../store/slices/comments-data/selectors';
import { generateComments, generateDetailOffer, generateOfferCards } from '../../util/mock';
import { getCurrentOffer, getCurrentOfferError, getIsCurrentOfferLoading } from '../../store/slices/offer-data/selectors';
import OfferPage from './offer-page';
import { getNearByLocations, getNearByOffers } from '../../store/slices/near-by-data/selectors';
import { getCurrentCityOffersLength, getPoints, getSelectedPoint, getCityDetailed, getCurrentCity, getCurrentCityOffers } from '../../store/slices/offers-data/selectors';

vi.mock('../../hooks/use-store');

describe('Component: offer page', () => {
  it('should render correctly when no error', async () => {
    const mockStore = await import('../../hooks/use-store');
    const offer = generateDetailOffer();
    const offers = generateOfferCards();
    mockStore.useAppSelector = vi.fn((selectors) => {
      switch (selectors) {
        case getAuthStatus:
          return 'AUTH';
        case getCurrentCityOffersLength:
          return 10;
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
        case getNearByOffers:
          return offers;
        case getIsCurrentOfferLoading:
          return false;
        case getCommentsLength:
          return 1;
        case getCurrentCity:
          return 'Amsterdam';
        case getCurrentOfferError:
          return null;
        case getNearByLocations:
          return offers.map((o) => o.location);
        case getCurrentCityOffers:
          return offers;
      }
    });
    const component = withStore(withHistory(<OfferPage/>)).withStoreComponent;

    render(component);

    expect(screen.getByTestId('offer-page')).toBeInTheDocument();
  });
});
