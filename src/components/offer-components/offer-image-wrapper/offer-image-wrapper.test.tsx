import { describe } from 'vitest';
import { withHistory, withStore } from '../../../util/mock-components';
import { render, screen } from '@testing-library/react';
import { generateOfferCards } from '../../../util/mock';
import OfferImageWrapper from './offer-image-wrapper';

describe('Component: offer host', () => {
  it('should render correctly', () => {
    const offer = generateOfferCards()[0];
    const component = withStore(withHistory(<OfferImageWrapper offer={offer} isFavoriteCard/>)).withStoreComponent;

    render(component);

    expect(screen.getByTestId('offer-image-wrapper')).toBeInTheDocument();
  });
});
