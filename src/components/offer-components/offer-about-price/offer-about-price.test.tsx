import { describe } from 'vitest';
import { withHistory, withStore } from '../../../util/mock-components';
import { render, screen } from '@testing-library/react';
import OfferAboutPrice from './offer-about-price';

describe('Component: offer about price', () => {
  it('should render correctly', () => {
    const component = withStore(withHistory(<OfferAboutPrice price={100}/>)).withStoreComponent;

    render(component);

    expect(screen.getByTestId('offer-price')).toBeInTheDocument();
  });
});
