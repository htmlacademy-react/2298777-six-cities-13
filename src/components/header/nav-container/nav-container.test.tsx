import { describe } from 'vitest';
import { withHistory, withStore } from '../../../util/mock-components';
import NavContainer from './nav-container';
import { render, screen } from '@testing-library/react';

vi.mock('../../../hooks/use-store');

describe('Component: nav container', () => {
  it('should render properly when authorized', async () => {
    const mockStore = await import('../../../hooks/use-store');
    mockStore.useAppSelector = vi.fn(() => 'AUTH');
    const component = withStore(withHistory(<NavContainer/>)).withStoreComponent;

    render(component);

    expect(screen.getByTestId('header-nav')).toBeInTheDocument();
    expect(screen.getByTestId('profile-link')).toBeInTheDocument();
    expect(screen.getByText('Sign out')).toBeInTheDocument();
    expect(screen.queryByText('Sign in')).not.toBeInTheDocument();
  });

  it('should render properly when not authorized', async () => {
    const mockStore = await import('../../../hooks/use-store');
    mockStore.useAppSelector = vi.fn(() => 'NO_AUTH');
    const component = withStore(withHistory(<NavContainer/>)).withStoreComponent;

    render(component);

    expect(screen.getByTestId('header-nav')).toBeInTheDocument();
    expect(screen.queryByTestId('profile-link')).not.toBeInTheDocument();
    expect(screen.queryByText('Sign out')).not.toBeInTheDocument();
    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });
});
