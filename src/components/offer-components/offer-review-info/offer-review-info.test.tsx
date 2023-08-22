import { describe } from 'vitest';
import { withHistory, withStore } from '../../../util/mock-components';
import { render, screen } from '@testing-library/react';
import { generateComments } from '../../../util/mock';
import OfferReviewInfo from './offer-review-info';


describe('Component: offer review info', () => {
  it('should render correctly', () => {
    const comments = generateComments();
    const component = withStore(withHistory(<OfferReviewInfo comment={comments[0]}/>)).withStoreComponent;

    render(component);

    expect(screen.getByText(comments[0].comment)).toBeInTheDocument();
  });
});
