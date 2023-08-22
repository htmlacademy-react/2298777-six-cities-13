import { describe } from 'vitest';
import { withHistory, withStore } from '../../../util/mock-components';
import { render, screen } from '@testing-library/react';
import { generateDetailOffer } from '../../../util/mock';
import OfferRating from './offer-rating';

describe('Component: offer rating', () => {
  it('should render correctly', () => {
    const offer = generateDetailOffer();
    const component = withStore(withHistory(<OfferRating offer={offer}/>)).withStoreComponent;

    render(component);

    expect(screen.getByTestId('offer-rating')).toBeInTheDocument();
  });
});
