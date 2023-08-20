import { render, screen } from '@testing-library/react';
import { withStore, withHistory } from '../../../util/mock-components';
import LoginLocation from './login-location';
import userEvent from '@testing-library/user-event';

vi.mock('../../../hooks/use-store');

describe('Component: login location', () => {
  it('should render correctly', () => {
    const component = withStore(withHistory(<LoginLocation/>)).withStoreComponent;

    render(component);

    expect(screen.getByTestId('login-location')).toBeInTheDocument();
  });

  it('should dispatch action when click on link', async () => {
    const mockDispatch = await import('../../../hooks/use-store');
    const mockAction = vi.fn();
    mockDispatch.useAppDispatch = vi.fn(() => mockAction);
    const component = withStore(withHistory(<LoginLocation/>)).withStoreComponent;

    render(component);

    expect(mockAction).toBeCalledTimes(0);

    await userEvent.click(screen.getByRole('link'));

    expect(mockAction).toBeCalledTimes(1);
  });
});
