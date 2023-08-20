import { render, screen } from '@testing-library/react';
import { withStore, withHistory } from '../../../util/mock-components';
import MainLocations from './main-locations';
import userEvent from '@testing-library/user-event';

vi.mock('../../../hooks/use-store');

describe('Component: login location', () => {
  it('should render correctly when currentCityOffersLength === 0', async () => {
    const mockStore = await import('../../../hooks/use-store');
    mockStore.useAppSelector = vi.fn(() => 'Amsterdam');
    const component = withStore(withHistory(<MainLocations/>)).withStoreComponent;

    render(component);

    expect(screen.getByTestId('main-locations')).toBeInTheDocument();
  });

  it('should dispatch action when click on link', async () => {
    const mockStore = await import('../../../hooks/use-store');
    mockStore.useAppSelector = vi.fn(() => 'Amsterdam');
    const mockAction = vi.fn();
    mockStore.useAppDispatch = vi.fn(() => mockAction);
    const component = withStore(withHistory(<MainLocations/>)).withStoreComponent;

    render(component);

    for (let i = 0; i < 6; i++) {
      await userEvent.click(screen.getAllByRole('link')[i]);
    }

    expect(mockAction).toBeCalledTimes(6);
  });
});
