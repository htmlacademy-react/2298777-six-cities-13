import { describe } from 'vitest';
import { withHistory, withStore } from '../../../util/mock-components';
import { render, screen } from '@testing-library/react';
import OfferPremiumMark from './offer-premium-mark';

describe('Component: offer premium mark', () => {
  it('should render correctly', () => {
    const component = withStore(withHistory(<OfferPremiumMark isPremium isOfferMark/>)).withStoreComponent;

    render(component);

    expect(screen.getByText('Premium')).toBeInTheDocument();
  });
});
