import { describe } from 'vitest';
import { withHistory, withStore } from '../../../util/mock-components';
import { render, screen } from '@testing-library/react';
import { generateDetailOffer } from '../../../util/mock';
import OfferGallery from './offer-gallery';

vi.mock('../../../hooks/use-store');

describe('Component: offer gallery', () => {
  it('should render correctly', async () => {
    const offer = generateDetailOffer();
    const mockStore = await import('../../../hooks/use-store');
    mockStore.useAppSelector = vi.fn(() => offer);
    const component = withStore(withHistory(<OfferGallery/>)).withStoreComponent;

    render(component);

    expect(screen.getByTestId('offer-gallery')).toBeInTheDocument();
  });
});
