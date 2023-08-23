import { describe } from 'vitest';
import { withHistory, withStore } from '../../../util/mock-components';
import LoginForm from './login-form';
import { render, screen } from '@testing-library/react';

describe('Component: login form', () => {
  it('should render correctly', () => {
    const component = withStore(withHistory(<LoginForm/>)).withStoreComponent;

    render(component);

    expect(screen.getAllByText('Sign in')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Sign in')[1]).toBeInTheDocument();
  });
});
