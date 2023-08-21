import { describe } from 'vitest';
import { withHistory, withStore } from '../../../util/mock-components';
import MainOffersEmpty from './main-offers-empty';
import { render, screen } from '@testing-library/react';

vi.mock('../../../hooks/use-store');

describe('Component: main offers empty', () => {
  it('should render properly', async () => {
    const mockStore = await import('../../../hooks/use-store');
    mockStore.useAppSelector = vi.fn(() => 'Amsterdam');
    const component = withStore(withHistory(<MainOffersEmpty/>)).withStoreComponent;

    render(component);

    expect(screen.getByText('No places to stay available')).toBeInTheDocument();
    expect(screen.getByText('We could not find any property available at the moment in Amsterdam')).toBeInTheDocument();
  });
});
