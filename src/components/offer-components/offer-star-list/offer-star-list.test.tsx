import { describe } from 'vitest';
import { withHistory, withStore } from '../../../util/mock-components';
import { render, screen } from '@testing-library/react';
import OfferStarList from './offer-star-list';

describe('Component: offer star list', () => {
  it('should render correctly', () => {
    const component = withStore(withHistory(<OfferStarList onChange={vi.fn()} rating={1}/>)).withStoreComponent;

    render(component);

    expect(screen.getByTestId('offer-star-list')).toBeInTheDocument();
  });
});
