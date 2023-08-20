import { render, screen } from '@testing-library/react';
import { withStore, withHistory } from '../../../util/mock-components';
import MainEmpty from './main-empty';

vi.mock('../../../hooks/use-store');

describe('Component: login location', () => {
  it('should render correctly when currentCityOffersLength === 0', async () => {
    const mockStore = await import('../../../hooks/use-store');
    mockStore.useAppSelector = vi.fn(() => 0);
    const component = withStore(withHistory(<MainEmpty/>)).withStoreComponent;

    render(component);

    expect(screen.getByTestId('empty-main')).toBeInTheDocument();
  });

  it('should render correctly when currentCityOffersLength === 0', async () => {
    const mockStore = await import('../../../hooks/use-store');
    mockStore.useAppSelector = vi.fn(() => 1);
    const component = withStore(withHistory(<MainEmpty/>)).withStoreComponent;

    render(component);

    expect(screen.queryByTestId('empty-main')).not.toBeInTheDocument();
  });
});
