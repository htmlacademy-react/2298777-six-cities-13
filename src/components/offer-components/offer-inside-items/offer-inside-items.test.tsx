import { describe } from 'vitest';
import { withHistory, withStore } from '../../../util/mock-components';
import { render, screen } from '@testing-library/react';
import { generateDetailOffer } from '../../../util/mock';
import OfferInsideItems from './offer-inside-items';


describe('Component: offer inside items', () => {
  it('should render correctly', () => {
    const offer = generateDetailOffer();
    const component = withStore(withHistory(<OfferInsideItems goods={offer.goods}/>)).withStoreComponent;

    render(component);

    expect(screen.getByTestId('offer-inside-item')).toBeInTheDocument();
  });
});
