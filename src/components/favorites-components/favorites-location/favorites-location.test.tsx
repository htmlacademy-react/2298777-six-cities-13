import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import { withHistory, withStore } from '../../../util/mock-components';
import FavoriteLocation from './favorites-location';
import userEvent from '@testing-library/user-event';

vi.mock('../../../hooks/use-store');

describe('Component: favorites location', () => {
  it('should render properly', () => {
    const city = 'Brussels';
    const component = withStore(withHistory(<FavoriteLocation city={city}/>)).withStoreComponent;

    render(component);

    expect(screen.getByText(city)).toBeInTheDocument();
    expect(screen.getByTestId('favorites-location')).toBeInTheDocument();
  });

  it('should dispatch when click on button', async () => {
    const city = 'Brussels';
    const component = withStore(withHistory(<FavoriteLocation city={city}/>)).withStoreComponent;
    const mockCheck = vi.fn();
    const mockHandleClick = vi.fn(() => mockCheck);
    const mockDispatch = (await import('../../../hooks/use-store'));
    mockDispatch.useAppDispatch = mockHandleClick;

    render(component);

    expect(mockCheck).toBeCalledTimes(0);

    await userEvent.click(screen.getByRole('link'));

    expect(mockCheck).toBeCalledTimes(1);
  });
});
