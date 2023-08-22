import { describe } from 'vitest';
import { withHistory, withStore } from '../../../util/mock-components';
import { render, screen, fireEvent } from '@testing-library/react';
import { generateDetailOffer } from '../../../util/mock';
import OfferForm from './offer-form';
import { getCurrentOffer } from '../../../store/slices/offer-data/selectors';
import { getIsCommentsLoading } from '../../../store/slices/comments-data/selectors';

vi.mock('../../../hooks/use-store');

describe('Component: offer form', () => {

  it('should render correctly', async () => {
    const offer = generateDetailOffer();
    const mockStore = await import('../../../hooks/use-store');
    mockStore.useAppSelector = vi.fn((selectors) => {
      switch (selectors) {
        case getCurrentOffer:
          return offer;
        case getIsCommentsLoading:
          return false;
      }
    });
    const component = withStore(withHistory(<OfferForm/>)).withStoreComponent;

    render(component);

    expect(screen.getByTestId('offer-form')).toBeInTheDocument();
  });

  it('should dispatch action when submit form', async () => {
    const offer = generateDetailOffer();
    const mockStore = await import('../../../hooks/use-store');
    const checkDispatch = vi.fn();
    mockStore.useAppDispatch = vi.fn(() => checkDispatch);
    mockStore.useAppSelector = vi.fn((selectors) => {
      switch (selectors) {
        case getCurrentOffer:
          return offer;
        case getIsCommentsLoading:
          return false;
      }
    });
    const component = withStore(withHistory(<OfferForm/>)).withStoreComponent;

    render(component);
    expect(checkDispatch).toBeCalledTimes(0);

    fireEvent.submit(screen.getByRole('button'));

    expect(checkDispatch).toBeCalledTimes(1);
  });
});
