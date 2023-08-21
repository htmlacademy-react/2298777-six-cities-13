import { describe } from 'vitest';
import { withHistory, withStore } from '../../../util/mock-components';
import { render, screen } from '@testing-library/react';
import MainSort from './main-sort';

vi.mock('../../../hooks/use-store');

describe('Component: main sort', () => {
  it('should render properly', async () => {
    const mockStore = await import('../../../hooks/use-store');
    mockStore.useAppSelector = vi.fn(() => 'Popular');
    const component = withStore(withHistory(<MainSort/>)).withStoreComponent;

    render(component);

    expect(screen.getByText('Sort by')).toBeInTheDocument();
    expect(screen.getAllByText('Popular')[0]).toBeInTheDocument();
  });
});
