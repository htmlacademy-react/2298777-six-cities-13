import { describe } from 'vitest';
import { withHistory, withStore } from '../../../util/mock-components';
import SignOutLink from './sign-out-link';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

vi.mock('../../../hooks/use-store');

describe('Component: sign out link', () => {
  it('should render properly', () => {
    const component = withStore(withHistory(<SignOutLink/>)).withStoreComponent;

    render(component);

    expect(screen.getByText('Sign out')).toBeInTheDocument();
  });

  it('should dispatch action when click on link', async () => {
    const mockStore = await import('../../../hooks/use-store');
    const mockAction = vi.fn();
    mockStore.useAppDispatch = vi.fn(() => mockAction);
    const component = withStore(withHistory(<SignOutLink/>)).withStoreComponent;

    render(component);

    expect(screen.getByText('Sign out')).toBeInTheDocument();
    expect(mockAction).toBeCalledTimes(0);

    await userEvent.click(screen.getByRole('link'));

    expect(mockAction).toBeCalledTimes(1);
  });
});
