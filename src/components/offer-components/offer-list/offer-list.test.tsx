import { describe } from 'vitest';
import { withHistory, withStore } from '../../../util/mock-components';
import { render, screen } from '@testing-library/react';
import OfferList from './offer-list';
import { getAuthStatus } from '../../../store/slices/user-data/selectors';
import { generateDetailOffer } from '../../../util/mock';
import { getCurrentCityOffersLength } from '../../../store/slices/offers-data/selectors';

vi.mock('../../../hooks/use-store');

describe('Component: offer inside items', () => {
  it('should render correctly', async () => {
    const mockStore = await import('../../../hooks/use-store');
    mockStore.useAppSelector = vi.fn((selectors) => {
      switch (selectors) {
        case getAuthStatus:
          return 'AUTH';
        case getCurrentCityOffersLength:
          return 200;
        default:
          return generateDetailOffer();
      }
    });
    const component = withStore(withHistory(<OfferList/>)).withStoreComponent;

    render(component);

    expect(screen.getByTestId('offer-list')).toBeInTheDocument();
  });
});
