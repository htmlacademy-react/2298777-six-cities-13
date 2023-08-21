import { describe } from 'vitest';
import { withHistory, withStore } from '../../../util/mock-components';
import { render, screen } from '@testing-library/react';
import OfferAboutRating from './offer-about-rating';

describe('Component: offer about rating', () => {
  it('should render correctly', () => {
    const component = withStore(withHistory(<OfferAboutRating rating={4}/>)).withStoreComponent;

    render(component);

    expect(screen.getByTestId('offer-about-rating')).toBeInTheDocument();
    expect(screen.getByText(4)).toBeInTheDocument();
  });
});
