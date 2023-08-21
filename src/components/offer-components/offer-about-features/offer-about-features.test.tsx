import { describe } from 'vitest';
import { withHistory, withStore } from '../../../util/mock-components';
import OfferAboutFeatures from './offer-about-features';
import { render, screen } from '@testing-library/react';

describe('Component: offer about features', () => {
  it('should render correctly', () => {
    const component = withStore(withHistory(<OfferAboutFeatures type='room' bedrooms={1} maxAdults={2}/>)).withStoreComponent;

    render(component);

    expect(screen.getByTestId('offer-features')).toBeInTheDocument();
  });
});
