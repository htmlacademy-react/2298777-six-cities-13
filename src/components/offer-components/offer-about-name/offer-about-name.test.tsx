import { describe } from 'vitest';
import { withHistory, withStore } from '../../../util/mock-components';
import { render, screen } from '@testing-library/react';
import { generateDetailOffer } from '../../../util/mock';
import OfferAboutName from './offer-about-name';

vi.mock('../../../hooks/use-store');

describe('Component: offer about name', () => {
  it('should render correctly', async () => {
    const detailedOffer = generateDetailOffer();
    const mockStore = await import('../../../hooks/use-store');
    mockStore.useAppSelector = vi.fn(() => 'AUTH');
    const component = withStore(withHistory(<OfferAboutName offer={detailedOffer} isFavorite/>)).withStoreComponent;

    render(component);

    expect(screen.getByText(detailedOffer.title)).toBeInTheDocument();
  });
});
