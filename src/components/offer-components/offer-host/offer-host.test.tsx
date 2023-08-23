import { describe } from 'vitest';
import { withHistory, withStore } from '../../../util/mock-components';
import { render, screen } from '@testing-library/react';
import { generateDetailOffer } from '../../../util/mock';
import OfferHost from './offer-host';

describe('Component: offer host', () => {
  it('should render correctly', () => {
    const offer = generateDetailOffer();
    const component = withStore(withHistory(<OfferHost description={offer.description} host={offer.host}/>)).withStoreComponent;

    render(component);

    expect(screen.getByText('Meet the host')).toBeInTheDocument();
  });
});
