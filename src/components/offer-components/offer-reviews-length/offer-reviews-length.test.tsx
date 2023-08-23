import { describe } from 'vitest';
import { withHistory, withStore } from '../../../util/mock-components';
import { render, screen } from '@testing-library/react';
import OfferReviewsLength from './offer-reviews-length';

vi.mock('../../../hooks/use-store');

describe('Component: offer reviews length', () => {
  it('should render correctly', async () => {
    const mockStore = await import('../../../hooks/use-store');
    mockStore.useAppSelector = vi.fn(() => 10);
    const component = withStore(withHistory(<OfferReviewsLength/>)).withStoreComponent;

    render(component);

    expect(screen.getByText(10)).toBeInTheDocument();
  });
});
