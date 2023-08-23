import { describe } from 'vitest';
import { withHistory, withStore } from '../../../util/mock-components';
import { render, screen } from '@testing-library/react';
import OfferAboutReviews from './offer-about-reviews';
import { getAuthStatus } from '../../../store/slices/user-data/selectors';
import { getComments } from '../../../store/slices/comments-data/selectors';
import { generateComments, generateDetailOffer } from '../../../util/mock';
import { getCurrentOffer } from '../../../store/slices/offer-data/selectors';

vi.mock('../../../hooks/use-store');

describe('Component: offer about reviews', () => {
  it('should render correctly', async () => {
    const mockStore = await import('../../../hooks/use-store');
    mockStore.useAppSelector = vi.fn((selectors) => {
      switch (selectors) {
        case getAuthStatus:
          return 'AUTH';
        case getComments:
          return generateComments();
        case getCurrentOffer:
          return generateDetailOffer();
      }
    });
    const component = withStore(withHistory(<OfferAboutReviews/>)).withStoreComponent;

    render(component);

    expect(screen.getByTestId('offer-about-reviews')).toBeInTheDocument();
  });
});
