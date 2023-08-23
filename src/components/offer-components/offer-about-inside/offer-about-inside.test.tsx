import { describe } from 'vitest';
import { withHistory, withStore } from '../../../util/mock-components';
import { render, screen } from '@testing-library/react';
import OfferAboutInside from './offer-about-inside';
import { generateDetailOffer } from '../../../util/mock';

describe('Component: offer about inside', () => {
  it('should render correctly', () => {
    const detailedOffer = generateDetailOffer();
    const component = withStore(withHistory(<OfferAboutInside goods={detailedOffer.goods}/>)).withStoreComponent;

    render(component);

    expect(screen.getByTestId('offer-inside')).toBeInTheDocument();
  });
});
