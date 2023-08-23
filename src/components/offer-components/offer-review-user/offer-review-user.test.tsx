import { describe } from 'vitest';
import { withHistory, withStore } from '../../../util/mock-components';
import { render, screen } from '@testing-library/react';
import OfferReviewUser from './offer-review-user';
import { generateComments } from '../../../util/mock';

describe('Component: offer review user', () => {
  it('should render correctly', () => {
    const comments = generateComments();
    const component = withStore(withHistory(<OfferReviewUser comment={comments[0]}/>)).withStoreComponent;

    render(component);

    expect(screen.getByText(comments[0].user.name)).toBeInTheDocument();
  });
});
