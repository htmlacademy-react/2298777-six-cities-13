import { describe } from 'vitest';
import { withHistory, withStore } from '../../../util/mock-components';
import { render, screen } from '@testing-library/react';
import OfferStarItem from './offer-star-item';
import userEvent from '@testing-library/user-event';

describe('Component: offer start item', () => {
  it('should render correctly', () => {
    const checkChange = vi.fn();
    const component = withStore(withHistory(<OfferStarItem star={1} onChange={checkChange} rating={1}/>)).withStoreComponent;

    render(component);

    expect(screen.getByTestId('offer-star-item')).toBeInTheDocument();
  });

  it('should make action when change and rating !== star', async () => {
    const checkChange = vi.fn();
    const component = withStore(withHistory(<OfferStarItem star={3} onChange={checkChange} rating={1}/>)).withStoreComponent;

    render(component);

    expect(checkChange).toBeCalledTimes(0);

    await userEvent.click(screen.getByTestId('offer-star-item'));

    expect(checkChange).toBeCalledTimes(1);
  });

  it('should not make action when change and rating === star', async () => {
    const checkChange = vi.fn();
    const component = withStore(withHistory(<OfferStarItem star={1} onChange={checkChange} rating={1}/>)).withStoreComponent;

    render(component);

    expect(checkChange).toBeCalledTimes(0);

    await userEvent.click(screen.getByTestId('offer-star-item'));

    expect(checkChange).toBeCalledTimes(0);
  });
});
