import { describe } from 'vitest';
import { withHistory, withStore } from '../../../util/mock-components';
import { render, screen } from '@testing-library/react';
import { generateOfferCards } from '../../../util/mock';
import OfferOtherPlaces from './offer-other-places';

vi.mock('../../../hooks/use-store');

describe('Component: offer other places', () => {
  it('should render correctly', async () => {
    const offers = generateOfferCards();
    const mockStore = await import('../../../hooks/use-store');
    mockStore.useAppSelector = vi.fn(() => offers);
    const component = withStore(withHistory(<OfferOtherPlaces/>)).withStoreComponent;

    render(component);

    expect(screen.getByText('Other places in the neighbourhood')).toBeInTheDocument();
  });
});
