import { describe } from 'vitest';
import { withHistory, withStore } from '../../../util/mock-components';
import { render, screen } from '@testing-library/react';
import { generateComments } from '../../../util/mock';
import OfferReviews from './offer-reviews';

vi.mock('../../../hooks/use-store');

describe('Component: offer reviews', () => {
  it('should render correctly', async () => {
    const comments = generateComments();
    const mockStore = await import('../../../hooks/use-store');
    mockStore.useAppSelector = vi.fn(() => comments);
    const component = withStore(withHistory(<OfferReviews/>)).withStoreComponent;

    render(component);

    expect(screen.getByTestId('offer-reviews')).toBeInTheDocument();
  });
});
