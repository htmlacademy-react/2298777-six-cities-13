import { describe } from 'vitest';
import { withHistory, withStore } from '../../../util/mock-components';
import { render, screen } from '@testing-library/react';
import { generateDetailOffer } from '../../../util/mock';
import OfferPrice from './offer-price';

vi.mock('../../../hooks/use-store');

describe('Component: offer price', () => {
  it('should render correctly', async () => {
    const offer = generateDetailOffer();
    const mockStore = await import('../../../hooks/use-store');
    mockStore.useAppSelector = vi.fn(() => 'AUTH');
    const component = withStore(withHistory(<OfferPrice offer={offer}/>)).withStoreComponent;

    render(component);

    expect(screen.getByTestId('offer-price')).toBeInTheDocument();
  });
});
