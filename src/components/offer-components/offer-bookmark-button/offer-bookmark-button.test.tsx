import { describe } from 'vitest';
import { withHistory, withStore } from '../../../util/mock-components';
import { render, screen } from '@testing-library/react';
import { generateDetailOffer } from '../../../util/mock';
import OfferBookmarkButton from './offer-bookmark-button';
import userEvent from '@testing-library/user-event';

vi.mock('../../../hooks/use-store');

describe('Component: offer bookmark button', () => {
  it('should render correctly', async () => {
    const offer = generateDetailOffer();
    const mockStore = await import('../../../hooks/use-store');
    mockStore.useAppSelector = vi.fn(() => 'AUTH');
    const component = withStore(withHistory(<OfferBookmarkButton isFavorite offer={offer}/>)).withStoreComponent;

    render(component);

    expect(screen.getByTestId('offer-bookmark-button')).toBeInTheDocument();
  });

  it('should dispatch if auth', async () => {
    const offer = generateDetailOffer();
    const mockStore = await import('../../../hooks/use-store');
    mockStore.useAppSelector = vi.fn(() => 'AUTH');
    const checkDispatch = vi.fn();
    mockStore.useAppDispatch = vi.fn(() => checkDispatch);
    const component = withStore(withHistory(<OfferBookmarkButton isFavorite offer={offer}/>)).withStoreComponent;

    render(component);

    expect(checkDispatch).toBeCalledTimes(0);

    await userEvent.click(screen.getByRole('button'));

    expect(checkDispatch).toBeCalledTimes(1);
  });
});
