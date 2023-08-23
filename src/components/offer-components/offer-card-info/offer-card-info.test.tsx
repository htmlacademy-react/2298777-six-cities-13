import { describe } from 'vitest';
import { withHistory, withStore } from '../../../util/mock-components';
import { render, screen } from '@testing-library/react';
import { generateDetailOffer } from '../../../util/mock';
import OfferCardInfo from './offer-card-info';

vi.mock('../../../hooks/use-store');

describe('Component: offer card info', () => {
  it('should render correctly', async () => {
    const offer = generateDetailOffer();
    const mockStore = await import('../../../hooks/use-store');
    mockStore.useAppSelector = vi.fn(() => 'AUTH');
    const component = withStore(withHistory(<OfferCardInfo offer={offer} isFavoriteCard={false}/>)).withStoreComponent;

    render(component);

    expect(screen.getByTestId('offer-card-info')).toBeInTheDocument();
  });
});
