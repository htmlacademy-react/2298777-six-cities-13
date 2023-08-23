import { describe } from 'vitest';
import { withHistory, withStore } from '../../../util/mock-components';
import { render, screen } from '@testing-library/react';
import { getAuthStatus } from '../../../store/slices/user-data/selectors';
import { generateDetailOffer, generateOfferCards } from '../../../util/mock';
import OfferCard from './offer-card';

vi.mock('../../../hooks/use-store');

describe('Component: offer card', () => {
  it('should render correctly', async () => {
    const mockStore = await import('../../../hooks/use-store');
    const mockOffer = generateOfferCards()[0];
    mockStore.useAppSelector = vi.fn((selectors) => {
      switch (selectors) {
        case getAuthStatus:
          return 'AUTH';
        default:
          return generateDetailOffer();
      }
    });
    const component = withStore(withHistory(<OfferCard offer={mockOffer}/>)).withStoreComponent;

    render(component);

    expect(screen.getByTestId('offer-card')).toBeInTheDocument();
  });
});
