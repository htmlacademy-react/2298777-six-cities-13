import { describe } from 'vitest';
import { withHistory, withStore } from '../../../util/mock-components';
import { render, screen } from '@testing-library/react';
import { generateDetailOffer } from '../../../util/mock';
import OfferName from './offer-name';

describe('Component: offer name', () => {
  it('should render correctly', () => {
    const offer = generateDetailOffer();
    const component = withStore(withHistory(<OfferName offer={offer}/>)).withStoreComponent;

    render(component);

    expect(screen.getByTestId('offer-name')).toBeInTheDocument();
  });
});
